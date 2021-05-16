import { FC } from 'react';
import './JobItem.scss';

const JobItem: FC = () => {

  return (
    <div className='job-component'>
      <div className='job-header'>
        <span className='job-title'>Software Engineer, Microstrategy Poland</span>
        <span className='job-location'>Warsaw, Poland</span>
      </div>
      <span className='time-frame'>Dec 2019 - Present</span>
      <div className='job-details'>
        <span>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam cursus enim non lorem ultricies luctus. Duis non porttitor dui, at pulvinar ante. Donec iaculis ligula non leo rhoncus sodales. Donec commodo ante ligula, nec pellentesque mauris mollis eu. Morbi porta lobortis nisi eget lacinia. Fusce nec mollis purus. Suspendisse fringilla blandit elit, ac imperdiet est porta id. Cras dapibus mauris vel facilisis accumsan.</span>
      </div>
    </div>
  );
}

export default JobItem;
