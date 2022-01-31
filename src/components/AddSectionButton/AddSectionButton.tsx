import { Button } from 'pwojtaszko-design';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getIsTokenValid } from '../../store/session/selector';
import './AddSectionButton.scss';

interface AddSectionButtonProps {
  onAddButton: () => void;
};

const AddSectionButton: FC<AddSectionButtonProps> = ({ onAddButton }) => {
  const isLoggedIn = useSelector(getIsTokenValid);

  if (!isLoggedIn) return <></>;

  return (
    <div className='add-section-button-component'>
      <Button
        text='+'
        handleClick={onAddButton}
      />
    </div>
  );
}

export default AddSectionButton;
