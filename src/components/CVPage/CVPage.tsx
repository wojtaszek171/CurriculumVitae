import { FC, useEffect } from 'react';
import Contact from './Contact';
import TopBar from './TopBar';
import Education from './Sections/Education';
import Employment from './Sections/Employment';
import Languages from './Sections/Languages';
import Profile from './Sections/Profile';
import Skills from './Sections/Skills';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCvDetails, setCvId } from '../../store/cvDetails/cvDetailsSlice';
import { getIsTokenValid } from '../../store/session/selector';
import { getCVDetailsLoaded, getDetailsLoading } from '../../store/cvDetails/selector';
import './CVPage.scss';
import Loader from '../Loader/LoginContainer';

const CVPage: FC = () => {
  const isLoggedIn = useAppSelector(getIsTokenValid);
  const isLoading = useAppSelector(getDetailsLoading);
  const isLoaded = useAppSelector(getCVDetailsLoaded);
  const dispatch = useAppDispatch();
  let { cvId } = useParams();

  useEffect(() => {
    if (isLoggedIn && cvId)
      dispatch(setCvId(cvId));
      dispatch(fetchCvDetails());
  }, [cvId, dispatch, isLoggedIn]);

  return (
    <div className='cv-page-component'>
      {isLoading && <div className='loader-wrapper'>
        <Loader />
      </div>}
      {isLoaded && <>
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
      </>}
    </div>
  );
}

export default CVPage;
