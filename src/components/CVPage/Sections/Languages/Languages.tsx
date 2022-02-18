import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import AddSectionButton from '../../../AddSectionButton';
import SkillItem from '../../SkillItem';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { getCVDetailsLanguages } from '../../../../store/cvDetails/selector';
import { LanguageItem } from '../../../../store/cvDetails/types';
import { createEmptyLanguage } from '../../../../store/cvDetails/cvDetailsSlice';

const Languages: FC = () => {
  const languagesItems = useAppSelector(getCVDetailsLanguages);
  const dispatch = useAppDispatch();

  const addSection = () => {
    dispatch(createEmptyLanguage());
  };

  return (
    <SectionWrapper
      title='Languages'
    >
      <>
        {languagesItems.map((item: LanguageItem) =>
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

export default Languages;
