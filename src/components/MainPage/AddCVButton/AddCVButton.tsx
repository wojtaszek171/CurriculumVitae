import { FC } from 'react';
import cvBg from '../../../assets/cv-icon.png';
import { createNewCV } from '../../../store/cvList/cvListSlice';
import { useAppDispatch } from '../../../store/hooks';
import './AddCVButton.scss';

const AddCVButton: FC = () => {
  const dispatch = useAppDispatch();

  const handleAddCV = () => {
    dispatch(createNewCV());
  };

  return (
    <div
      className='add-cv-button'
      onClick={handleAddCV}
    >
      <img
        alt='cv-bg'
        src={cvBg}
        draggable="false"
      />
      <div className='button-text-wrapper'>
        <span className='button-text'>
          +
        </span>
      </div>
    </div>
  );
}

export default AddCVButton;
