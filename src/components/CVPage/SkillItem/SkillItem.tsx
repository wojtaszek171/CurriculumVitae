import { FC } from 'react';
import { useSelector } from 'react-redux';
import useCVTranslation from '../../../helpers/useCVTranslation';
import { LanguageItem } from '../../../store/cvDetails/types';
import { getIsTokenValid } from '../../../store/session/selector';
import SectionText from '../SectionText';
import './SkillItem.scss';

const RATING_MAX = 5;

const SkillItem: FC<LanguageItem> = ({ name, rating, details }) => {
  const isLoggedIn = useSelector(getIsTokenValid);
  const tName = useCVTranslation(name);

  const handleSkillNameSave = () => {

  };

  const handleRatingChange = (rating: number) => {
    
  }

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
    </div>
  );
}

export default SkillItem;
