import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import AddSectionButton from '../../../AddSectionButton';
import JobItem from '../../JobItem';
import { useSelector } from 'react-redux';
import { getCVDetailsEmployment } from '../../../../store/cvDetails/selector';
import { EmploymentItem } from '../../../../store/cvDetails/types';

const Employment: FC = () => {
  const employmentItems = useSelector(getCVDetailsEmployment);

  const addSection = () => {
    
  };

  return (
    <SectionWrapper
      title='Employment'
    >
      <>
        {employmentItems.map((item: EmploymentItem) => <JobItem key={item.id} {...item}/>)}
        <AddSectionButton onAddButton={addSection}/>
      </>
    </SectionWrapper>
  );
}

export default Employment;
