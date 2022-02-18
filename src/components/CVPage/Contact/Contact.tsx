import { FC } from 'react';
import useCVTranslation from '../../../helpers/useCVTranslation';
import { updateUserData } from '../../../store/cvDetails/cvDetailsSlice';
import { getCVDetailsUser, getSelectedLanguage } from '../../../store/cvDetails/selector';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import SectionText from '../SectionText';
import SectionWrapper from '../SectionWrapper';
import './Contact.scss';

const Contact: FC = () => {
  const { address, phone, email } = useAppSelector(getCVDetailsUser);
  const locale = useAppSelector(getSelectedLanguage);
  const dispatch = useAppDispatch();

  const tAddress = useCVTranslation(address);

  const handleAddressSave = (address: string) => {
    dispatch(updateUserData({ address: { [locale]: address } }));
  }

  const handlePhoneSave = (phone: string) => {
    dispatch(updateUserData({ phone }));
  }

  const handleEmailSave = (email: string) => {
    dispatch(updateUserData({ email }));
  }
  
  return (
    <SectionWrapper
      title='Contact'
    >
      <div className="contact-component">
        <div className='contact-section'>
          <span className='contact-section-title'>Address</span>
          <span className='section-content'>
            <SectionText
              placeholder='Address'
              text={tAddress}
              onSave={handleAddressSave}
            />
          </span>
        </div>
        <div className='contact-section'>
          <span className='contact-section-title'>Phone</span>
          <span className='section-content'>
            <SectionText
              placeholder='Phone'
              text={phone}
              onSave={handlePhoneSave}
            />
          </span>
        </div>
        <div className='contact-section'>
          <span className='contact-section-title'>Email</span>
          <span className='section-content'>
            <SectionText
              placeholder='Email'
              text={email?.length ? email : ''}
              onSave={handleEmailSave}
            />
          </span>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
