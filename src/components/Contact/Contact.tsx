import './Contact.scss';

function Contact() {

  return (
    <div className="contact-component">
      <div className='contact-section'>
        <span className='contact-section-title'>Address</span>
        <span className='section-content'>Lazurowa, Warsaw, Poland</span>
      </div>
      <div className='contact-section'>
        <span className='contact-section-title'>Phone</span>
        <span className='section-content'>(123) 123 456 789</span>
      </div>
      <div className='contact-section'>
        <span className='contact-section-title'>Email</span>
        <span className='section-content'>pawelwojtaszko@o2.pl</span>
      </div>
    </div>
  );
}

export default Contact;
