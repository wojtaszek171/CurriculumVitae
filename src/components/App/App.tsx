import { Footer, Header, Modal } from 'pwojtaszko-design';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { eraseCookie } from '../../helpers';
import { clearSession, fetchCurrentUserData } from '../../store/session/sessionSlice';
import { getFirstName, getIsTokenValid, getLastName } from '../../store/session/selector';
import { fetchAllCvs } from '../../store/cvList/cvListSlice';
import CVPage from '../CVPage';
import Login from '../Login';
import MainPage from '../MainPage';
import './App.scss';

const App = () => {
  const [loginVisible, setLoginVisible] = useState(false);
  const isLoggedIn = useAppSelector(getIsTokenValid);
  const firstName = useAppSelector(getFirstName);
  const lastName = useAppSelector(getLastName);
  const dispatch = useAppDispatch();

  const handleTitleClick = () => {
    window.location.href = window.location.origin;
  }

  useEffect(() => {
    dispatch(fetchCurrentUserData());
    dispatch(fetchAllCvs());
  }, [dispatch])

  useEffect(() => {
    if (isLoggedIn)
      dispatch(fetchCurrentUserData())
  }, [isLoggedIn, dispatch])

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
