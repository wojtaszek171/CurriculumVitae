import { FC } from 'react';
import './SkillItem.scss';

const RATING_MAX = 5;

interface SkillItemProps {
  title: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

const SkillItem: FC<SkillItemProps> = ({ title, rating }) => {

  return (
    <div className='skill-component'>
      <span className='skill-title'>{title}</span>
      <div className='skill-rating'>
        {[...Array(rating)].map((el, i) => <div className={'rating-dot full'} key={`dot${i}full`}/>)}
        {[...Array(RATING_MAX-rating)].map((el, i) => <div className={'rating-dot'} key={`dot${i}`}/>)}
      </div>
    </div>
  );
}

export default SkillItem;
