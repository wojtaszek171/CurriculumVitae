import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import AddSectionButton from '../../../AddSectionButton';
import EducationItem from '../../../EducationItem';

const Education: FC = () => {

  const addSection = () => {
    
  };

  return (
    <SectionWrapper
      title='Education'
    >
      <>
        <EducationItem />
        <AddSectionButton onAddButton={addSection}/>
      </>
    </SectionWrapper>
  );
}

export default Education;
