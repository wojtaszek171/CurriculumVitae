import { FC } from 'react';
import SectionText from '../SectionText';
import './JobItem.scss';

interface JobItemProps {
  title: string;
  location: string;
  timeFrame: string;
  details: string;
};

const JobItem: FC<JobItemProps> = ({ title, location, timeFrame, details }) => {

  const handleTitleSave = () => {

  }

  const handleLocationSave = () => {

  }

  const handleTimeFrameSave = () => {

  }

  const handleDetailsSave = () => {

  }

  return (
    <div className='job-component'>
      <div className='job-header'>
        <span className='job-title'>
          <SectionText
            text={title}
            onSave={handleTitleSave}
          />
        </span>
        <span className='job-location'>
          <SectionText
            text={location}
            onSave={handleLocationSave}
          />
        </span>
      </div>
      <span className='time-frame'>
        <SectionText
          text={timeFrame}
          onSave={handleTimeFrameSave}
        />
      </span>
      <div className='job-details'>
        <SectionText
          text={details}
          onSave={handleDetailsSave}
        />
      </div>
    </div>
  );
}

export default JobItem;
