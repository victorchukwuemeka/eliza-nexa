import React, { useEffect, useState } from 'react';
import ContentCalendar from '../components/ContentCalendar';

const CalendarPage: React.FC = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Fetch the generated schedule (mock data for now)
    const mockSchedule = [
      { date: 'Monday', content: 'Post a motivational quote', time: '10:00 AM' },
      { date: 'Wednesday', content: 'Share a tutorial video', time: '2:00 PM' },
    ];
    setSchedule(mockSchedule);
  }, []);

  return (
    <div>
      <h2>Your Content Calendar</h2>
      <ContentCalendar schedule={schedule} />
    </div>
  );
};

export default CalendarPage;
