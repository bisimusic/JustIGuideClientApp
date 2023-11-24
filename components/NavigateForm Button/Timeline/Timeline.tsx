import React, { FC, useEffect } from 'react';

interface TimelineProps {
  caseType: string | null;
  setTimeline: React.Dispatch<React.SetStateAction<Array<object>>>;
}

interface TimelineEntry {
  date: string;
  event: string;
}

const Timeline: FC<TimelineProps> = ({ caseType, setTimeline }) => {
  // Assume `timelineData` is fetched or computed based on `caseType`
  const timelineData: Array<TimelineEntry> = [
    { date: '2023-10-01', event: 'Case Opened' },
    { date: '2023-10-15', event: 'First Hearing' },
    // ... more events
  ];

  // Set the timeline when the component mounts or caseType changes
  useEffect(() => {
    setTimeline(timelineData);
  }, [caseType, setTimeline]);

  return (
    <div>
      <h3>Timeline for Case Type: {caseType}</h3>
      <ul>
        {timelineData.map((entry, index) => (
          <li key={index}>
            {entry.date}: {entry.event}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
