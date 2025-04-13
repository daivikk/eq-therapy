'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AppointmentScheduler({ therapist }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  const getAvailableDates = () => {
    const dates = [];
    const startDate = therapist.availableFrom === 'May 2025' 
      ? new Date(2025, 4, 1) // May 1, 2025
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Selected date:', selectedDate);
    console.log('Selected time:', selectedTime);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-medium text-[#503622] mb-6">
        Book an Appointment
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-[#503622] mb-3">
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
                      ? 'bg-[#503622] text-white'
                      : 'bg-[#F5F1EE] text-[#503622] hover:bg-[#E8E0D9]'
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
                  <div className="text-xs text-[#8B7355]">
                    {date.toLocaleDateString('en-US', { month: 'short' })}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {selectedDate && (
            <div>
              <h3 className="text-lg font-medium text-[#503622] mb-3">
                Select a Time
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {therapist.availability[days[selectedDate.getDay()]]?.map((time) => (
                  <motion.button
                    key={time}
                    type="button"
                    onClick={() => handleTimeSelect(time)}
                    className={`p-3 rounded-lg text-center ${
                      selectedTime === time
                        ? 'bg-[#503622] text-white'
                        : 'bg-[#F5F1EE] text-[#503622] hover:bg-[#E8E0D9]'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {selectedTime && (
            <motion.button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#503622] text-white hover:bg-[#8B7355] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book an Intake Session
            </motion.button>
          )}
        </div>
      </form>
    </div>
  );
} 