import { FC } from 'react';
import cvBg from '../../../assets/cv-icon.png';
import './AddCVButton.scss';

const AddCVButton: FC = () => {

  const handleAddCV = () => {

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
