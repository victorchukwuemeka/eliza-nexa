import React from 'react';

interface ScheduleItem {
  date: string;
  content: string;
  time: string;
}

interface Props {
  schedule: ScheduleItem[];
}

const ContentCalendar: React.FC<Props> = ({ schedule }) => {
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <h3>Your Weekly Content Calendar</h3>
      {schedule.length === 0 ? (
        <p>No content scheduled yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {schedule.map((item, index) => (
            <li key={index} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ddd' }}>
              <strong>{item.date}</strong> - {item.content} at {item.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContentCalendar;
