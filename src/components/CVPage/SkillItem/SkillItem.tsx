import { FC } from 'react';
import { useSelector } from 'react-redux';
import useCVTranslation from '../../../helpers/useCVTranslation';
import { LanguageItem } from '../../../store/cvDetails/types';
import { getIsTokenValid } from '../../../store/session/selector';
import DeleteItemButton from '../DeleteItemButton';
import SectionText from '../SectionText';
import './SkillItem.scss';

const RATING_MAX = 5;

interface SkillItemProps extends LanguageItem {
  onDelete: (id: string) => void;
  onNameSave: (id: string, name: string) => void;
  onRatingChange: (id: string, rating: number) => void;
}

const SkillItem: FC<SkillItemProps> = ({ id, name, rating, onDelete, onNameSave, onRatingChange }) => {
  const isLoggedIn = useSelector(getIsTokenValid);
  const tName = useCVTranslation(name);

  const handleSkillNameSave = (newName: string) => {
    onNameSave(id, newName)
  };

  const handleRatingChange = (newRating: number) => {
    onRatingChange(id, newRating)
  };

  const handleElementDelete = () => {
    onDelete(id);
  };

  return (
    <div className='skill-component'>
      <span className='skill-title'>
        <SectionText
          placeholder='Skill'
          text={tName}
          onSave={handleSkillNameSave}
        />
      </span>
      <div className={`skill-rating${isLoggedIn ? ' editable' : ''}`}>
        {[...Array(rating)].map((el, i) =>
          <div
            className={'rating-dot full'}
            onClick={() => handleRatingChange(i + 1)}
            key={`dot${i}full`}
          />
        )}
        {[...Array(RATING_MAX-rating)].map((el, i) =>
          <div
            className={'rating-dot'}
            onClick={() => handleRatingChange(rating + i + 1)}
            key={`dot${i}`}
          />
        )}
      </div>
      <DeleteItemButton onDeleteClick={handleElementDelete}/>
    </div>
  );
}

export default SkillItem;
