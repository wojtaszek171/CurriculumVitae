import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import AddSectionButton from '../../../AddSectionButton';
import SkillItem from '../../SkillItem';
import { getCVDetailsSkills } from '../../../../store/cvDetails/selector';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { SkillItem as SkillItemType } from '../../../../store/cvDetails/types';
import { createEmptySkill } from '../../../../store/cvDetails/cvDetailsSlice';

const Skills: FC = () => {
  const skillsItems = useAppSelector(getCVDetailsSkills);
  const dispatch = useAppDispatch();

  const addSection = () => {
    dispatch(createEmptySkill());
  };

  return (
    <SectionWrapper
      title='Skills'
    >
      <>
        {skillsItems.map((item: SkillItemType) =>
          <SkillItem
            key={item.id}
            {...item}
          />
        )}
        <AddSectionButton onAddButton={addSection}/>
      </>
    </SectionWrapper>
  );
}

export default Skills;
