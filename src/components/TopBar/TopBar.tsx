import { FC, useEffect, useState } from 'react';
import photoJPG from './profile.jpg';
import ImageEdit from './ImageEdit';
import { useSelector } from 'react-redux';
import { getIsTokenValid } from '../../selectors/session';
import './TopBar.scss';

const Name: FC = () => {
  const isLoggedIn = useSelector(getIsTokenValid);

  const [photo, setPhoto] = useState<string | undefined>(undefined);

  const fileToDataUri = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });

  useEffect(() => {
    if (photoJPG) {
      var oReq = new XMLHttpRequest();    
      oReq.open('get', photoJPG , true);
      oReq.responseType = 'blob';
      oReq.onload = function () {
        fileToDataUri(oReq.response).then((dataUri: any) => {
          setPhoto(dataUri);
        });
      };
      oReq.send();
    }
  }, []);

  return (
    <div className="top-bar-component">
      <ImageEdit
        edit={isLoggedIn}
        photo={photo || ''}
      />
      <div className='name-wrapper'>
        <span className='person-name'>Paweł</span>
        <span className='person-surname'>Wojtaszko</span>
        <span className='person-profession'>Software Engineer</span>
      </div>
    </div>
  );
}

export default Name;
