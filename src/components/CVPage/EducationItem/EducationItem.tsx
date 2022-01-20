import { FC } from 'react';
import SectionText from '../SectionText';
import './EducationItem.scss';

interface EducationItemProps {
  title: string;
  location: string;
  timeFrame: string;
}

const EducationItem: FC<EducationItemProps> = ({ title, location, timeFrame }) => {

  const handleJobTitleSave = () => {

  };

  const handleJobLoactionSave = () => {

  };

  const handleJobTimeFrameSave = () => {

  };

  return (
    <div className='education-component'>
      <div className='education-header'>
        <span className='education-title'>
          <SectionText
            placeholder='School'
            text={title}
            onSave={handleJobTitleSave}
          />
        </span>
        <span className='education-location'>
          <SectionText
            placeholder='School location'
            text={location}
            onSave={handleJobLoactionSave}
          />
        </span>
      </div>
      <span className='time-frame'>
        <SectionText
          placeholder='Time frame'
          text={timeFrame}
          onSave={handleJobTimeFrameSave}
        />
      </span>
    </div>
  );
}

export default EducationItem;
