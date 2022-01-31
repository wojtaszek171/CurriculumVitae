import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getOwnedCvsArray, getPublishedCvsArray } from '../../store/cvList/selector';
import { getIsTokenValid } from '../../store/session/selector';
import AddCVButton from './AddCVButton';
import CVItem from './CVItem';
import './MainPage.scss';

const MainPage: FC = () => {
  const publishedCVs = useSelector(getPublishedCvsArray);
  const ownedCVs = useSelector(getOwnedCvsArray);
  const isLoggedIn = useSelector(getIsTokenValid);

  return (
    <div className='main-page-component'>
      <span className='section-title'>Published cv-s</span>
      <div className='published-cvs-list'>
        {publishedCVs.map((cv) => <CVItem key={cv.id} {...cv}/>)}
      </div>
      {isLoggedIn && <>
        <span className='section-title'>Your cv-s</span>
        <div className='owned-cvs-list'>
          {ownedCVs.map((cv) => <CVItem key={cv.id} {...cv}/>)}
          <AddCVButton />
        </div>
      </>
      }
      
    </div>
  );
}

export default MainPage;
