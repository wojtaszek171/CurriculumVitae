import Contact from '../Contact';
import Name from '../Name';
import './Content.scss';
import SectionWrapper from './SectionWrapper';

function Content() {

  return (
    <div className="content-component">
      <Name />
      <div className='content-wrapper'>
        <div className='side-content'>
          <SectionWrapper
            title='Details'
          >
            <Contact />
          </SectionWrapper>
          <SectionWrapper
            title='Skills'
          >
            <></>
          </SectionWrapper>
          <SectionWrapper
            title='Languages'
          >
            <></>
          </SectionWrapper>
        </div>
        <div className='main-content'>
          <SectionWrapper
            title='Profile'
          >
            <></>
          </SectionWrapper>
          <SectionWrapper
            title='Employment history'
          >
            <></>
          </SectionWrapper>
          <SectionWrapper
            title='Education'
          >
            <></>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
}

export default Content;
