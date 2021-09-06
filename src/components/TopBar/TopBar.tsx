import { FC } from 'react';
import './TopBar.scss';
import photo from './profile.jpg';
import ImageEdit from './ImageEdit';

const Name: FC = () => {

  return (
    <div className="top-bar-component">
      <ImageEdit
        edit={false}
        photo={photo}
      />
      <div className='name-wrapper'>
        <span className='person-name'>Paweł</span>
        <span className='person-surname'>Wojtaszko</span>
        <span className='person-profession'>Software Engineer</span>
      </div>
    </div>
  );
}

export default Name;
