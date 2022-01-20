import { FC, ReactElement } from 'react';
import './SectionWrapper.scss';

interface SectionWrapperProps {
  title?: string;
  children: ReactElement;
};

const SectionWrapper: FC<SectionWrapperProps> = ({ title, children }) => {

  return (
    <div className='section-wrapper'>
      {title && <span className='section-title'>{title}</span>}
      <div className='section-content'>
        {children}
      </div>
    </div>
  );
}

export default SectionWrapper;
