import { FC } from 'react';
import { CVItem } from '../../../reducers/cvList/types';
import './CVItemComponent.scss';

const CVItemComponent: FC<CVItem> = ({ id, userId, isPublished, updatedAt }) => {

  const handleCVItemClick = () => {

  };

  return (
    <div
      className='cv-item-component'
      onClick={handleCVItemClick}
    >
      
    </div>
  );
}

export default CVItemComponent;
