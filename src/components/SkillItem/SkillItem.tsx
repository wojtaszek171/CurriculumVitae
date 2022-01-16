import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getIsTokenValid } from '../../selectors/session';
import SectionText from '../SectionText';
import './SkillItem.scss';

const RATING_MAX = 5;

interface SkillItemProps {
  title: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

const SkillItem: FC<SkillItemProps> = ({ title, rating }) => {
  const isLoggedIn = useSelector(getIsTokenValid);

  const handleSkillNameSave = () => {

  };

  const handleRatingChange = (rating: number) => {
    
  }

  return (
    <div className='skill-component'>
      <span className='skill-title'>
        <SectionText
          text={title}
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
