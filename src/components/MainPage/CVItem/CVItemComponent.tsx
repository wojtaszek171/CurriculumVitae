import { FC, useState } from 'react';
import { CVItem } from '../../../store/cvList/types';
import { removeCV } from '../../../store/cvList/cvListSlice';
import { useAppDispatch } from '../../../store/hooks';
import cvBg from '../../../assets/cv-icon.png';
import './CVItemComponent.scss';
import { Button, Modal } from 'pwojtaszko-design';

const CVItemComponent: FC<CVItem> = ({ id, userId, isPublished, updatedAt }) => {
  const dispatch = useAppDispatch();
  const [showRemoveConfirmation, setShowRemoveConfirmation] = useState(false);

  const handleCVItemClick = () => {

  };

  const handleCVRemove = () => {
    dispatch(removeCV({ id }));
  };

  return (
    <div
      className='cv-item-component'
      onClick={handleCVItemClick}
    >
      <span
        className='remove-cv-button'
        onClick={() => setShowRemoveConfirmation(true)}
      >
        🗑️
      </span>
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
      <Modal
        onClose={() => setShowRemoveConfirmation(false)}
        show={showRemoveConfirmation}
        title='Are you sure you want to delete cv?'
      >
        <div className='delete-confirmation'>
          <div className='buttons-wrapper'>
            <div>
              <Button
                handleClick={() => setShowRemoveConfirmation(false)}
                text='No'
              />
            </div>
            <div className='button-red'>
              <Button
                handleClick={handleCVRemove}
                text='Yes'
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CVItemComponent;
