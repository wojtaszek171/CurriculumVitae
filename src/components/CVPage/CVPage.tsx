import { FC } from 'react';
import Contact from './Contact';
import TopBar from './TopBar';
import Education from './Sections/Education';
import Employment from './Sections/Employment';
import Languages from './Sections/Languages';
import Profile from './Sections/Profile';
import Skills from './Sections/Skills';
import SectionWrapper from './SectionWrapper';
import './CVPage.scss';

const CVPage: FC = () => {

  return (
    <div className='cv-page-component'>
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

export default CVPage;
