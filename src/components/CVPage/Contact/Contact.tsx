import { FC } from 'react';
import useCVTranslation from '../../../helpers/useCVTranslation';
import { getCVDetailsUser } from '../../../store/cvDetails/selector';
import { useAppSelector } from '../../../store/hooks';
import SectionText from '../SectionText';
import SectionWrapper from '../SectionWrapper';
import './Contact.scss';

const Contact: FC = () => {
  const { address, phone, email } = useAppSelector(getCVDetailsUser);

  const tAddress = useCVTranslation(address);

  const handleAddressSave = () => {

  }

  const handlePhoneSave = () => {

  }

  const handleEmailSave = () => {

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
