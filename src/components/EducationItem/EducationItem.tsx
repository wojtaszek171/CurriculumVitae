import { FC } from 'react';
import SectionText from '../SectionText';
import './EducationItem.scss';

const EducationItem: FC = () => {

  const jobTitle = `Master's degree of Computer Science, Lublin University of Technology`;
  const jobLocation = 'Lublin, Poland';
  const timeFrame = '2014 - 2019';

  const handleJobTitleSave = () => {

  };

  const handleJobLoactionSave = () => {

  };

  const handleJobTimeFrameSave = () => {

  };

  return (
    <div className='job-component'>
      <div className='job-header'>
        <span className='job-title'>
          <SectionText
            text={jobTitle}
            onSave={handleJobTitleSave}
          />
        </span>
        <span className='job-location'>
          <SectionText
            text={jobLocation}
            onSave={handleJobLoactionSave}
          />
        </span>
      </div>
      <span className='time-frame'>
        <SectionText
          text={timeFrame}
          onSave={handleJobTimeFrameSave}
        />
      </span>
    </div>
  );
}

export default EducationItem;
