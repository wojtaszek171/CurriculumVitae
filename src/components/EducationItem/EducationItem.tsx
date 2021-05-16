import { FC } from 'react';
import './EducationItem.scss';

const EducationItem: FC = () => {

  return (
    <div className='job-component'>
      <div className='job-header'>
        <span className='job-title'>Master's degree of Computer Science, Lublin University of technology</span>
        <span className='job-location'>Lublin, Poland</span>
      </div>
      <span className='time-frame'>2014 - 2019</span>
    </div>
  );
}

export default EducationItem;
