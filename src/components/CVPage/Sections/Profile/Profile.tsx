import { FC } from 'react';
import useCVTranslation from '../../../../helpers/useCVTranslation';
import { updateUserData } from '../../../../store/cvDetails/cvDetailsSlice';
import { getCVDetailsUser, getSelectedLanguage } from '../../../../store/cvDetails/selector';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import SectionText from '../../SectionText';
import SectionWrapper from '../../SectionWrapper';

const Profile: FC = () => {
  const userDetails = useAppSelector(getCVDetailsUser);
  const tPresentation = useCVTranslation(userDetails.presentation);
  const locale = useAppSelector(getSelectedLanguage);
  const dispatch = useAppDispatch();

  const handleProfileSave = (text: string) => {
    dispatch(updateUserData({ presentation: { [locale]: text } }));
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
