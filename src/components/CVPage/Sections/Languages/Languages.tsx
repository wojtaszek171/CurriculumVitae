import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import AddSectionButton from '../../../AddSectionButton';
import SkillItem from '../../SkillItem';
import { useAppSelector } from '../../../../store/hooks';
import { getCVDetailsLanguages } from '../../../../store/cvDetails/selector';
import { LanguageItem } from '../../../../store/cvDetails/types';

const Languages: FC = () => {
  const languagesItems = useAppSelector(getCVDetailsLanguages);

  const addSection = () => {
    
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
