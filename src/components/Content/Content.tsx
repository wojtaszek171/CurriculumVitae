import Contact from '../Contact';
import TopBar from '../TopBar';
import SectionWrapper from './SectionWrapper';
import Skills from './Sections/Skills';
import Languages from './Sections/Languages';
import Profile from './Sections/Profile';
import Employment from './Sections/Employment';
import Education from './Sections/Education';
import './Content.scss';

const Content = () => {

  return (
    <div className="content-component">
      <TopBar />
      <div className='content-wrapper'>
        <div className='side-content'>
          <SectionWrapper
            title='Contact'
          >
            <Contact />
          </SectionWrapper>
          <Skills />
          <Languages />
        </div>
        <div className='main-content'>
          <Profile />
          <Employment />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default Content;
