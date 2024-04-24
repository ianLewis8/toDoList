import React, { useState } from 'react';
import './calendar.css'

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());


  const setCurrentMonthName = () => {
    
    if (currentMonth === 0) return "January";
    if (currentMonth === 1) return "February";
    if (currentMonth === 2) return "March";
    if (currentMonth === 3) return "April";
    if (currentMonth === 4) return "May";
    if (currentMonth === 5) return "June";
    if (currentMonth === 6) return "July";
    if (currentMonth === 7) return "August";
    if (currentMonth === 8) return "September";
    if (currentMonth === 9) return "November";
    if (currentMonth === 10) return "October";
    if (currentMonth === 11) return "December";
  }

  const monthName = setCurrentMonthName();

  // Utility function to generate the days of the month
  const generateCalendarDays = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthOffset = new Date(year, month, 1).getDay();

    // Inserts empty days at beginning of month
    let daysArray = Array.from( { length: daysInMonth }, (_, i) => i + 1);
    for (let i = 0; i < monthOffset; i++) daysArray.unshift(`null_${i}`);
    
    return daysArray;
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
    <div className="calendar-container">
      <div className="calendar-bar">
        <div><span>{`${monthName}, ${currentYear}`}</span></div>
        <div className="buttons">
          <button onClick={prevMonth}><div className='symbol small'>arrow_upward</div></button>
          <button onClick={nextMonth}><div className='symbol small'>arrow_downward</div></button>
        </div>
      </div>
      <div className="weekdays">
        <div class="weekday">Sunday</div>
        <div class="weekday">Monday</div>
        <div class="weekday">Tuesday</div>
        <div class="weekday">Wednesday</div>
        <div class="weekday">Thursday</div>
        <div class="weekday">Friday</div>
        <div class="weekday">Saturday</div>
      </div>
      <div className="calendar">
        {days.map(day => {

          // Doesnt show 'null' in boxes
          let date;
          if(typeof day === 'string' && day.startsWith("null")) date = "";
          
          else date = day;

          return (
            <button key={day} className="calendar-day" onClick={() => onDayClick(day)}>
              <span>{date}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
