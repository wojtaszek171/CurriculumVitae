import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import AddSectionButton from '../../../AddSectionButton';
import SkillItem from '../../SkillItem';
import { getCVDetailsSkills, getSelectedLanguage } from '../../../../store/cvDetails/selector';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { SkillItem as SkillItemType } from '../../../../store/cvDetails/types';
import { createEmptySkill, deleteSkillItem, updateSkillItem } from '../../../../store/cvDetails/cvDetailsSlice';

const Skills: FC = () => {
  const skillsItems = useAppSelector(getCVDetailsSkills);
  const dispatch = useAppDispatch();
  const locale = useAppSelector(getSelectedLanguage);

  const addSection = () => {
    dispatch(createEmptySkill());
  };

  const onDelete = (id: string) => {
    dispatch(deleteSkillItem(id))
  }

  const onNameChange = (id: string, name: string) => {
    dispatch(updateSkillItem({ id, body: { name: { [locale]: name }}}))
  }

  const onRatingChange = (id: string, rating: number) => {
    dispatch(updateSkillItem({ id, body: { rating }}))
  }

  return (
    <SectionWrapper
      title='Skills'
    >
      <>
        {skillsItems.map((item: SkillItemType) =>
          <SkillItem
            key={item.id}
            onDelete={onDelete}
            onNameSave={onNameChange}
            onRatingChange={onRatingChange}
            {...item}
          />
        )}
        <AddSectionButton onAddButton={addSection}/>
      </>
    </SectionWrapper>
  );
}

export default Skills;
