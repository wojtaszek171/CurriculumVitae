import './Contact.scss';

function Contact() {

  return (
    <div className="contact-component">
      <span className='contact-header'>Contact</span>
      <div className='contact-section'>
        <span className='section-title'>Address</span>
        <span className='section-content'></span>
      </div>
      <div className='contact-section'>
        <span className='section-title'>Phone</span>
        <span className='section-content'>(123) 123 456 789</span>
      </div>
      <div className='contact-section'>
        <span className='section-title'>Email</span>
        <span className='section-content'>pawelwojtaszko@o2.pl</span>
      </div>
    </div>
  );
}

export default Contact;
