import { FC } from 'react';
import SkillItem from '../../../SkillItem';
import SectionWrapper from '../../SectionWrapper';
import AddSectionButton from '../../../AddSectionButton';

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
