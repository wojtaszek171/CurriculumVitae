import { Footer, Header, Modal } from 'pwojtaszko-design';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { eraseCookie, getCookie } from '../../helpers';
import { setOwnedCVsData, setPublishedCVsData } from '../../reducers/cvList/cvList';
import { clearSession, setSessionData } from '../../reducers/session/session';
import { fetchCurrentUser, fetchOwnedCVs, fetchPublishedCVs } from '../../restService/restService';
import { getAuthToken, getFirstName, getIsTokenValid, getLastName } from '../../selectors/session';
import CVPage from '../CVPage';
import Login from '../Login';
import MainPage from '../MainPage';
import './App.scss';

const App = () => {
  const [loginVisible, setLoginVisible] = useState(false);
  const isLoggedIn = useSelector(getIsTokenValid);
  const authToken = useSelector(getAuthToken);
  const firstName = useSelector(getFirstName);
  const lastName = useSelector(getLastName);
  const dispatch = useDispatch();

  const handleTitleClick = () => {
    window.location.href = window.location.origin;
  }

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      fetchCurrentUser(token).then(res =>
        dispatch(setSessionData({ authToken: token, ...res }))
      ).catch(e => {
        console.log('Last user session expired.');
        eraseCookie('token');
        dispatch(clearSession());
      });
    }

    fetchPublishedCVs().then(cvs => dispatch(setPublishedCVsData(cvs)));
  }, [dispatch])
  
  useEffect(() => {    
    if (authToken) {
      fetchOwnedCVs(authToken).then(cvs => dispatch(setOwnedCVsData(cvs)));
    }
  }, [authToken, dispatch])

  const handleLoginOpen = () => {
    setLoginVisible(true);
  }

  const handleLoginClose = () => {
    setLoginVisible(false);
  }

  const handleLogout = () => {
    eraseCookie('token');
    dispatch(clearSession());
  }

  const dropdownConfig: any = [
    {
        item: <span>Logout</span>,
        onClick: handleLogout,
        key: 'Logout'
    }
  ]

  return (
    <div className="main-container-component">
        <Header
          left={
            <span
              className="header-title"
              onClick={handleTitleClick}
            >
              Curriculum Vitae
            </span>
          }
          right={<>{!isLoggedIn && <a href="#" className="right-button" onClick={handleLoginOpen}>Login to edit</a>}</>}
          dropdownTitle={`${firstName} ${lastName}`}
          dropdownElements={isLoggedIn ? dropdownConfig : []}
        />
        <div className='app-content'>
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path="/cv/:id" element={<CVPage />}/>
            </Routes>
          </Router>
        </div>
        <Footer middle={<a href='https://github.com/wojtaszek171/CurriculumVitae'>https://github.com/wojtaszek171/CurriculumVitae</a>}/>
        <Modal show={loginVisible} title={"Login to administrate"} onClose={handleLoginClose}>
          <Login onLogin={handleLoginClose} />
        </Modal>
    </div>
  );
}

export default App;
