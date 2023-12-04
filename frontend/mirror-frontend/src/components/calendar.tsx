import React from 'react';
import './calendar.css';

const CalendarUI = () => {
  // This would be replaced with data fetched from your Python backend
  const mockData = {
    weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    weeks: [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27, 28],
      [29, 30, 31, null, null, null, null], // null for empty days in the month
    ],
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Calendar</h2>
      <div className="calendar">
        <div className="calendar-header">
          {mockData.weekDays.map((day) => (
            <div key={day} className="calendar-header-day">
              {day}
            </div>
          ))}
        </div>
        {mockData.weeks.map((week, index) => (
          <div key={index} className="calendar-week">
            {week.map((day, dayIndex) => (
              <div key={dayIndex} className="calendar-day">
                {day || ''}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarUI;