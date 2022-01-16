import { Footer, Header, Modal } from 'pwojtaszko-design';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { eraseCookie, getCookie } from '../../helpers';
import { clearSession, setSessionData } from '../../reducers/session/session';
import { getCurrentUser } from '../../restService/restService';
import { getAuthToken, getFirstName, getLastName } from '../../selectors/session';
import Content from '../Content';
import Login from '../Login';
import './MainContainer.scss';

const MainContainer = () => {
  const [loginVisible, setLoginVisible] = useState(false);
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
      getCurrentUser(token).then(res =>
        dispatch(setSessionData({ authToken: token, ...res }))
      ).catch(e => {
        console.log('Last user session expired.');
        eraseCookie('token');
        dispatch(clearSession());
      });
    }
  }, [dispatch])

  const handleLoginOpen = () => {
    setLoginVisible(true);
  }

  const handleLoginClose = () => {
    setLoginVisible(false);
  }

  const loggedIn = !!(authToken && firstName);

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
          right={<>{!loggedIn && <a href="#" className="right-button" onClick={handleLoginOpen}>Login to edit</a>}</>}
          dropdownTitle={`${firstName} ${lastName}`}
          dropdownElements={loggedIn ? dropdownConfig : []}
        />
        <Content />
        <Footer />
        <Modal show={loginVisible} title={"Login to administrate"} onClose={handleLoginClose}>
          <Login onLogin={handleLoginClose} />
        </Modal>
    </div>
  );
}

export default MainContainer;
