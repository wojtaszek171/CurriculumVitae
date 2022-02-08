import { FC, useEffect, useState } from 'react';
import { CVItem } from '../../../store/cvList/types';
import { removeCV } from '../../../store/cvList/cvListSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Button, Modal } from 'pwojtaszko-design';
import { getAuthToken, getCurrentUserId } from '../../../store/session/selector';
import cvBg from '../../../assets/cv-icon.png';
import { useNavigate } from 'react-router-dom';
import useCVTranslation from '../../../helpers/useCVTranslation';
import { CVUser } from '../../../store/cvDetails/types';
import { fetchCVUser } from '../../../restService/restService';
import './CVItemComponent.scss';

const CVItemComponent: FC<CVItem> = ({ id, userId, isPublished, updatedAt }) => {
  const dispatch = useAppDispatch();
  const [userDetails, setUserDetails] = useState<CVUser>();
  const tPosition = useCVTranslation(userDetails?.position);
  const authToken = useAppSelector(getAuthToken);


  const currentUserId = useAppSelector(getCurrentUserId);
  const [showRemoveConfirmation, setShowRemoveConfirmation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCVUser(authToken, id)
      .then(setUserDetails);
  }, [authToken, id]);

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
          {userDetails?.name}
        </span>
        <span className='cv-profession'>
          {tPosition}
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
                onClick={() => setShowRemoveConfirmation(false)}
                text='No'
              />
            </div>
            <div className='button-red'>
              <Button
                onClick={handleCVRemove}
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
