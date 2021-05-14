import { FC } from 'react';
import './Name.scss';

const Name: FC = () => {

  return (
    <div className="name-component">
      <span className='person-name'>Paweł Wojtaszko</span>
      <span className='person-profession'>Software Engineer</span>
    </div>
  );
}

export default Name;
