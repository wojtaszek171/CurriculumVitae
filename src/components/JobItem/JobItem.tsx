import { FC } from 'react';
import './JobItem.scss';

interface JobItemProps {
  title: string;
  location: string;
  timeFrame: string;
  details: string;
};

const JobItem: FC<JobItemProps> = ({ title, location, timeFrame, details }) => {

  return (
    <div className='job-component'>
      <div className='job-header'>
        <span className='job-title'>{title}</span>
        <span className='job-location'>{location}</span>
      </div>
      <span className='time-frame'>{timeFrame}</span>
      <div className='job-details'>
        {details}
      </div>
    </div>
  );
}

export default JobItem;
