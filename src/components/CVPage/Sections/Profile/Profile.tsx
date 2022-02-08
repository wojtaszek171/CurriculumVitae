import { FC } from 'react';
import useCVTranslation from '../../../../helpers/useCVTranslation';
import { getCVDetailsUser } from '../../../../store/cvDetails/selector';
import { useAppSelector } from '../../../../store/hooks';
import SectionText from '../../SectionText';
import SectionWrapper from '../../SectionWrapper';

const Profile: FC = () => {
  const userDetails = useAppSelector(getCVDetailsUser);
  const tPresentation = useCVTranslation(userDetails.presentation);

  const handleProfileSave = () => {

  }

  return (
    <SectionWrapper
      title='Profile'
    >
      <>
        <SectionText
          placeholder='Profile details'
          text={tPresentation}
          onSave={handleProfileSave}
        />
      </>
    </SectionWrapper>
  );
}

export default Profile;
