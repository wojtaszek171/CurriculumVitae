import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import AddSectionButton from '../../../AddSectionButton';
import EducationItem from '../../EducationItem';
import { useSelector } from 'react-redux';
import { getCVDetailsEducation } from '../../../../store/cvDetails/selector';
import { EducationItem as EducationItemType } from '../../../../store/cvDetails/types';
import { useAppDispatch } from '../../../../store/hooks';
import { createEmptyEducation, deleteEducationItem } from '../../../../store/cvDetails/cvDetailsSlice';

const Education: FC = () => {
  const educationItems = useSelector(getCVDetailsEducation);
  const dispatch = useAppDispatch();

  const addSection = () => {
    dispatch(createEmptyEducation());
  };

  const handleDelete = (id: string) => {
    dispatch(deleteEducationItem(id))
  }

  return (
    <SectionWrapper
      title='Education'
    >
      <>
        {educationItems.map((item: EducationItemType) =>
          <EducationItem
            onDelete={handleDelete}
            key={item.id}
            {...item}
          />
        )}
        <AddSectionButton onAddButton={addSection}/>
      </>
    </SectionWrapper>
  );
}

export default Education;
