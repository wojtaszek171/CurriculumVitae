import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import AddSectionButton from '../../../AddSectionButton';
import SkillItem from '../../SkillItem';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { getCVDetailsLanguages, getSelectedLanguage } from '../../../../store/cvDetails/selector';
import { LanguageItem } from '../../../../store/cvDetails/types';
import { createEmptyLanguage, deleteLanguageItem, updateLanguageItem } from '../../../../store/cvDetails/cvDetailsSlice';

const Languages: FC = () => {
  const languagesItems = useAppSelector(getCVDetailsLanguages);
  const dispatch = useAppDispatch();
  const locale = useAppSelector(getSelectedLanguage);

  const addSection = () => {
    dispatch(createEmptyLanguage());
  };

  const onDelete = (id: string) => {
    dispatch(deleteLanguageItem(id))
  }

  const onNameChange = (id: string, name: string) => {
    dispatch(updateLanguageItem({ id, body: { name: { [locale]: name }}}))
  }

  const onRatingChange = (id: string, rating: number) => {
    dispatch(updateLanguageItem({ id, body: { rating }}))
  }

  return (
    <SectionWrapper
      title='Languages'
    >
      <>
        {languagesItems.map((item: LanguageItem) =>
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

export default Languages;
