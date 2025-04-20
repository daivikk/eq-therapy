'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AppointmentScheduler({ therapist }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    referral: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingStatus, setBookingStatus] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  // Fetch booked slots when component mounts or when therapist changes
  useEffect(() => {
    fetchBookedSlots();
  }, [therapist?.id]);

  const fetchBookedSlots = async () => {
    if (!therapist?.id) return;
    
    try {
      // In a real implementation, this would be a fetch call to your API
      // For now, we'll simulate with localStorage
      const savedBookings = localStorage.getItem(`bookings_${therapist.id}`);
      if (savedBookings) {
        setBookedSlots(JSON.parse(savedBookings));
      }
    } catch (error) {
      console.error('Error fetching booked slots:', error);
    }
  };

  const getAvailableDates = () => {
    const dates = [];
    const startDate = therapist.availableFrom === 'May 2025' 
      ? new Date(2025, 4, 19) // May 19, 2025 (months are 0-indexed, so 4 = May)
      : new Date(); // Current date for available therapists

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const dayName = days[date.getDay()];
      if (therapist.availability[dayName]?.length > 0) {
        dates.push(date);
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const openBookingModal = () => {
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const isTimeSlotBooked = (date, time) => {
    if (!date) return false;
    
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    
    return bookedSlots.some(slot => 
      slot.date === formattedDate && 
      slot.time === time
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Format date and time for email
      const formattedDate = selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
      
      const bookingData = {
        patientName: formData.name,
        patientEmail: formData.email,
        patientPhone: formData.phone,
        patientReferral: formData.referral,
        therapistName: therapist.name,
        therapistId: therapist.id,
        appointmentDate: formattedDate,
        appointmentTime: selectedTime
      };
      
      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
      
      if (response.ok) {
        // Save the booked slot to our local state and localStorage
        const simplifiedDate = selectedDate.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });
        
        const newBookedSlots = [...bookedSlots, { 
          date: simplifiedDate, 
          time: selectedTime 
        }];
        
        setBookedSlots(newBookedSlots);
        
        // Save to localStorage for persistence
        localStorage.setItem(
          `bookings_${therapist.id}`, 
          JSON.stringify(newBookedSlots)
        );
        
        setBookingStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          referral: ''
        });
        setTimeout(() => {
          setShowModal(false);
          setBookingStatus(null);
          setSelectedTime(null); // Reset selected time after booking
        }, 3000);
      } else {
        setBookingStatus('error');
      }
    } catch (error) {
      console.error('Booking error:', error);
      setBookingStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-medium text-[#2C1A47] mb-6">
        Book an Appointment
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-[#2C1A47] mb-3">
            Select a Date
          </h3>
          <div className="grid grid-cols-7 gap-2">
            {availableDates.map((date) => (
              <motion.button
                key={date.toISOString()}
                type="button"
                onClick={() => handleDateSelect(date)}
                className={`p-2 rounded-lg text-center ${
                  selectedDate?.toDateString() === date.toDateString()
                    ? 'bg-[#E2CFFF] text-[#2C1A47]'
                    : 'bg-[#F0E6FF] text-[#2C1A47] hover:bg-[#F0E6FF]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-sm font-medium">
                  {date.toLocaleDateString('en-US', { weekday: 'short' })}
                </div>
                <div className="text-lg font-medium">
                  {date.getDate()}
                </div>
                <div className="text-xs text-[#2C1A47]">
                  {date.toLocaleDateString('en-US', { month: 'short' })}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {selectedDate && (
          <div>
            <h3 className="text-lg font-medium text-[#2C1A47] mb-3">
              Select a Time
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {therapist.availability[days[selectedDate.getDay()]]?.map((time) => {
                const isBooked = isTimeSlotBooked(selectedDate, time);
                return (
                  <motion.button
                    key={time}
                    type="button"
                    onClick={() => !isBooked && handleTimeSelect(time)}
                    disabled={isBooked}
                    className={`p-3 rounded-lg text-center ${
                      isBooked 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : selectedTime === time
                          ? 'bg-[#000000] text-[#ffffff]'
                          : 'bg-[#F0E6FF] text-[#2C1A47] hover:bg-[#F0E6FF]'
                    }`}
                    whileHover={!isBooked ? { scale: 1.05 } : {}}
                    whileTap={!isBooked ? { scale: 0.95 } : {}}
                  >
                    {time}
                    {isBooked && <span className="block text-xs mt-1">(Booked)</span>}
                  </motion.button>
                );
              })}
            </div>
          </div>
        )}

        {selectedTime && (
          <motion.button
            type="button"
            onClick={openBookingModal}
            className="w-full py-3 rounded-lg bg-[#2C1A47] text-white hover:bg-[#000000] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book an Intake Session
          </motion.button>
        )}
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-lg p-6 max-w-md w-full m-4"
            >
              <h3 className="text-xl font-medium text-[#2C1A47] mb-4">
                Complete Your Booking
              </h3>
              
              {bookingStatus === 'success' ? (
                <div className="text-center p-4">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-lg font-medium text-[#2C1A47]">Booking Confirmed!</p>
                  <p className="text-[#2C1A47]">Check your email for details.</p>
                </div>
              ) : bookingStatus === 'error' ? (
                <div className="text-center p-4">
                  <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <p className="text-lg font-medium text-[#2C1A47]">Booking Failed</p>
                  <p className="text-[#2C1A47]">Please try again later.</p>
                  <button
                    className="mt-4 px-4 py-2 bg-[#2C1A47] text-white rounded-lg hover:bg-[#000000]"
                    onClick={() => setBookingStatus(null)}
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[#2C1A47] mb-4">
                        You're booking with <span className="font-medium">{therapist.name}</span> on{" "}
                        <span className="font-medium">
                          {selectedDate?.toLocaleDateString('en-US', {
                            weekday: 'long',
                            month: 'long', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>{" "}
                        at <span className="font-medium">{selectedTime}</span>
                      </p>
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#2C1A47]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-[#2C1A47] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C1A47]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#2C1A47]">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-[#2C1A47] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C1A47]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#2C1A47]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-[#2C1A47] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C1A47]"
                      />
                    </div>
                    <div>
                      <label htmlFor="referral" className="block text-sm font-medium text-[#2C1A47]">
                        How did you hear about us? (optional)
                      </label>
                      <input
                        type="text"
                        id="referral"
                        name="referral"
                        value={formData.referral}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-[#2C1A47] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C1A47]"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 border border-[#2C1A47] text-[#2C1A47] rounded-lg hover:bg-[#F0E6FF]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 bg-[#2C1A47] text-white rounded-lg hover:bg-[#000000] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing
                        </span>
                      ) : (
                        "Confirm Booking"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
} 