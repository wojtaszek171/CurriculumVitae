import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsTokenValid } from '../../selectors/session';
import SectionText from '../SectionText';
import './Contact.scss';

const Contact = () => {
  const [address, setAddress] = useState('My home address');
  const [phone, setPhone] = useState('(123) 123 456 789');
  const [email, setEmail] = useState('pawelwojtaszko@o2.pl');

  const handleAddressSave = () => {

  }

  const handlePhoneSave = () => {

  }

  const handleEmailSave = () => {

  }

  return (
    <div className="contact-component">
      <div className='contact-section'>
        <span className='contact-section-title'>Address</span>
        <span className='section-content'>
          <SectionText
            text={address}
            onSave={handleAddressSave}
          />
        </span>
      </div>
      <div className='contact-section'>
        <span className='contact-section-title'>Phone</span>
        <span className='section-content'>
          <SectionText
            text={phone}
            onSave={handlePhoneSave}
          />
        </span>
      </div>
      <div className='contact-section'>
        <span className='contact-section-title'>Email</span>
        <span className='section-content'>
          <SectionText
            text={email}
            onSave={handleEmailSave}
          />
        </span>
      </div>
    </div>
  );
}

export default Contact;
