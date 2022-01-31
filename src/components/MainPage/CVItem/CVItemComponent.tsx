import { FC } from 'react';
import { CVItem } from '../../../store/cvList/types';
import cvBg from '../../../assets/cv-icon.png';
import './CVItemComponent.scss';

const CVItemComponent: FC<CVItem> = ({ id, userId, isPublished, updatedAt }) => {

  const handleCVItemClick = () => {

  };

  return (
    <div
      className='cv-item-component'
      onClick={handleCVItemClick}
    >
      <img
        alt='cv-bg'
        src={cvBg}
        draggable="false"
      />
      <span className='cv-name'>
        Pawel Wojtaszko
      </span>
      <span className='cv-profession'>
        Software Engineer
      </span>
    </div>
  );
}

export default CVItemComponent;
