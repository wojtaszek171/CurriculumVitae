import { FC, useState } from 'react';
import { CVItem } from '../../../store/cvList/types';
import { removeCV } from '../../../store/cvList/cvListSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Button, Modal } from 'pwojtaszko-design';
import { getCurrentUserId } from '../../../store/session/selector';
import cvBg from '../../../assets/cv-icon.png';
import { useNavigate } from 'react-router-dom';
import './CVItemComponent.scss';

const CVItemComponent: FC<CVItem> = ({ id, userId, isPublished, updatedAt }) => {
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector(getCurrentUserId);
  const [showRemoveConfirmation, setShowRemoveConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleCVItemClick = () => {
    navigate(`/cv/${id}`, { replace: true });
  };

  const handleCVRemove = (e: MouseEvent) => {
    e.stopPropagation();
    dispatch(removeCV({ id }));
  };

  return (
    <div className='cv-item-component-wrapper'>
      {currentUserId === userId && <span
        className='remove-cv-button'
        onClick={() => setShowRemoveConfirmation(true)}
      >
        🗑️
      </span>}
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
