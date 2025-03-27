'use client';
import { useState } from 'react';
import { format, addDays, startOfWeek, addMonths, isBefore } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';

export default function AppointmentScheduler({ therapist }) {
  const [selectedDate, setSelectedDate] = useState(
    therapist.availableFrom ? new Date(2025, 4, 19) : new Date()
  );
  const [selectedTime, setSelectedTime] = useState(null);
  const [month, setMonth] = useState(0); // 0 = current month

  // Determine the starting date based on therapist availability
  const startDate = therapist.availableFrom 
    ? new Date(2025, 4, 19) // May 19, 2025
    : new Date();

  // Generate week dates
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const baseDate = addMonths(startDate, month);
    const start = startOfWeek(baseDate, { weekStartsOn: 1 });
    return addDays(start, i);
  });

  // Get available times based on day of week
  const getAvailableTimes = (date) => {
    const dayOfWeek = format(date, 'EEEE').toLowerCase();
    const availability = therapist.availability?.[dayOfWeek] || [];
    
    // If the date is before May 19, 2025 and therapist is only available from May 2025
    if (therapist.availableFrom && isBefore(date, new Date(2025, 4, 19))) {
      return [];
    }
    
    return availability;
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl p-6 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={() => setMonth(month - 1)}
          className="p-2 rounded-full hover:bg-[#F5F1EE] text-[#503622]"
          disabled={therapist.availableFrom && month <= 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <h3 className="text-lg font-medium text-[#503622]">
          {format(addMonths(startDate, month), 'MMMM yyyy')}
        </h3>
        <button 
          onClick={() => setMonth(month + 1)}
          className="p-2 rounded-full hover:bg-[#F5F1EE] text-[#503622]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Week selector */}
      <div className="grid grid-cols-7 gap-2 mb-8">
        {weekDates.map((date) => (
          <button
            key={date.toString()}
            onClick={() => setSelectedDate(date)}
            disabled={therapist.availableFrom && isBefore(date, new Date(2025, 4, 19))}
            className={`p-3 rounded-lg text-center transition-colors ${
              format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                ? 'bg-[#503622] text-white'
                : therapist.availableFrom && isBefore(date, new Date(2025, 4, 19))
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'hover:bg-[#F5F1EE] text-[#503622]'
            }`}
          >
            <div className="text-xs font-medium">{format(date, 'EEE')}</div>
            <div className="text-sm">{format(date, 'd')}</div>
          </button>
        ))}
      </div>

      {/* Time slots */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[#503622] mb-4">
          Available Times for {format(selectedDate, 'MMMM d, yyyy')}
        </h3>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedDate.toString()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-3 gap-2"
          >
            {getAvailableTimes(selectedDate).length > 0 ? (
              getAvailableTimes(selectedDate).map((time) => (
                <motion.button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  whileHover={{ scale: 1.05 }}
                  className={`p-2 text-sm rounded-lg transition-colors ${
                    selectedTime === time
                      ? 'bg-[#503622] text-white'
                      : 'bg-[#F5F1EE] hover:bg-[#E8E2DC] text-[#503622]'
                  }`}
                >
                  {time}
                </motion.button>
              ))
            ) : (
              <p className="col-span-3 text-center text-[#8B7355] py-4">
                No available times for this date.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Book button */}
      {selectedTime && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => {
            // Handle booking logic
            alert(`Appointment scheduled with ${therapist.name} on ${format(selectedDate, 'MMMM d, yyyy')} at ${selectedTime}`);
          }}
          className="mt-8 w-full px-4 py-2 rounded-full bg-[#503622] text-white hover:bg-[#8B7355] transition-colors"
        >
          Book Appointment
        </motion.button>
      )}
    </motion.div>
  );
} 