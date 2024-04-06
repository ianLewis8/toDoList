import React, { useState } from 'react';

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // Utility function to generate the days of the month
  const generateCalendarDays = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  const days = generateCalendarDays(currentYear, currentMonth);

  return (
    <div className="calendar">
      {days.map(day => (
        <div key={day} className="calendar-day">{day}</div>
      ))}
    </div>
  );
};

export default Calendar;