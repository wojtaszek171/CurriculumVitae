import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import AddSectionButton from '../../../AddSectionButton';
import EducationItem from '../../EducationItem';
import { useSelector } from 'react-redux';
import { getCVDetailsEducation } from '../../../../store/cvDetails/selector';
import { EducationItem as EducationItemType } from '../../../../store/cvDetails/types';

const Education: FC = () => {
  const educationItems = useSelector(getCVDetailsEducation);

  const addSection = () => {
    
  };

  return (
    <SectionWrapper
      title='Education'
    >
      <>
        {educationItems.map((item: EducationItemType) => <EducationItem key={item.id} {...item}/>)}
        <AddSectionButton onAddButton={addSection}/>
      </>
    </SectionWrapper>
  );
}

export default Education;
