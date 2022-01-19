import { FC } from 'react';
import SectionWrapper from '../../SectionWrapper';
import SectionText from '../../../SectionText';

const Profile: FC = () => {

  const profile = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed mauris felis. Aenean ut efficitur massa, non aliquam nisl. Suspendisse porttitor volutpat efficitur. Etiam dignissim finibus lorem, eu tincidunt eros pulvinar ac. Quisque nisi orci, pharetra a elit nec, sagittis cursus nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac orci a ante facilisis finibus.\
  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam cursus enim non lorem ultricies luctus. Duis non porttitor dui, at pulvinar ante. Donec iaculis ligula non leo rhoncus sodales. Donec commodo ante ligula, nec pellentesque mauris mollis eu. Morbi porta lobortis nisi eget lacinia. Fusce nec mollis purus. Suspendisse fringilla blandit elit, ac imperdiet est porta id. Cras dapibus mauris vel facilisis accumsan.';

  const handleProfileSave = () => {

  }

  return (
    <SectionWrapper
      title='Profile'
    >
      <>
        <SectionText
          text={profile}
          onSave={handleProfileSave}
        />
      </>
    </SectionWrapper>
  );
}

export default Profile;
