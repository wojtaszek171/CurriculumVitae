import { FC } from 'react';
import SkillItem from '../../../SkillItem';
import SectionWrapper from '../../SectionWrapper';
import AddSectionButton from '../../../AddSectionButton';

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
