import { FC } from 'react';
import Contact from './Contact';
import TopBar from './TopBar';
import Education from './Sections/Education';
import Employment from './Sections/Employment';
import Languages from './Sections/Languages';
import Profile from './Sections/Profile';
import Skills from './Sections/Skills';
import { useParams } from 'react-router-dom';
import './CVPage.scss';

const CVPage: FC = () => {
  let { cvId } = useParams();

  return (
    <div className='cv-page-component'>
      <TopBar />
      <div className='content-wrapper'>
        <div className='side-content'>
          <Contact />
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
