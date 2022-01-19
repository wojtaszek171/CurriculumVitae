import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import AddSectionButton from '../../../AddSectionButton';
import EducationItem from '../../../EducationItem';

const Education: FC = () => {

  const educationItems = [
    {
      id: 1,
      title: `Master's degree of Computer Science, Lublin University of Technology`,
      location: 'Lublin, Poland',
      timeFrame: '2014 - 2019'
    }
  ]

  const addSection = () => {
    
  };

  return (
    <SectionWrapper
      title='Education'
    >
      <>
        {educationItems.map(item => <EducationItem key={item.id} {...item}/>)}
        <AddSectionButton onAddButton={addSection}/>
      </>
    </SectionWrapper>
  );
}

export default Education;
