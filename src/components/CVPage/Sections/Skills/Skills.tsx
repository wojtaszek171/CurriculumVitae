import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import AddSectionButton from '../../../AddSectionButton';
import SkillItem from '../../SkillItem';

const Skills: FC = () => {

  const addSection = () => {
    
  };

  return (
    <SectionWrapper
      title='Skills'
    >
      <>
        <SkillItem
          title='React'
          rating={3}
        />
        <AddSectionButton onAddButton={addSection}/>
      </>
    </SectionWrapper>
  );
}

export default Skills;
