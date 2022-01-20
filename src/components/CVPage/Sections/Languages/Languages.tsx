import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import AddSectionButton from '../../../AddSectionButton';
import SkillItem from '../../SkillItem';

const Languages: FC = () => {

  const addSection = () => {
    
  };

  return (
    <SectionWrapper
      title='Languages'
    >
      <>
        <SkillItem
          title='English'
          rating={4}
        />
        <AddSectionButton onAddButton={addSection}/>
      </>
    </SectionWrapper>
  );
}

export default Languages;
