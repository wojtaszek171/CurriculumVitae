import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import JobItem from '../../../JobItem';
import AddSectionButton from '../../../AddSectionButton';

const Employment: FC = () => {

  const addSection = () => {
    
  };

  return (
    <SectionWrapper
      title='Employment'
    >
      <>
        <JobItem
          title={'Software Engineer, Microstrategy Poland'}
          location={'Warsaw, Poland'}
          timeFrame={'Dec 2019 - Present'}
          details={'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam cursus enim non lorem ultricies luctus. Duis non porttitor dui, at pulvinar ante. Donec iaculis ligula non leo rhoncus sodales. Donec commodo ante ligula, nec pellentesque mauris mollis eu. Morbi porta lobortis nisi eget lacinia. Fusce nec mollis purus. Suspendisse fringilla blandit elit, ac imperdiet est porta id. Cras dapibus mauris vel facilisis accumsan'}
        />
        <AddSectionButton onAddButton={addSection}/>
      </>
    </SectionWrapper>
  );
}

export default Employment;
