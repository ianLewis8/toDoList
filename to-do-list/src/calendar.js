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

  // Handlers for changing month and year
  const nextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    if (currentMonth === 11) {
      setCurrentYear((prevYear) => prevYear + 1);
    }
  };

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    if (currentMonth === 0) {
      setCurrentYear((prevYear) => prevYear - 1);
    }
  };

  // Handler for day button click
  const onDayClick = (day) => {
    console.log(`Clicked on day: ${day}`);
  };

  return (
    <div>
      <button onClick={prevMonth}>Previous Month</button>
      <span>{`${currentYear}-${currentMonth + 1}`}</span>
      <button onClick={nextMonth}>Next Month</button>
      <div className="calendar">
        {days.map(day => (
          <button key={day} className="calendar-day" onClick={() => onDayClick(day)}>
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
