import { FC, useEffect, useState } from 'react';
import photoJPG from './profile.jpg';
import ImageEdit from './ImageEdit';
import { useSelector } from 'react-redux';
import SectionText from '../SectionText';
import { getIsTokenValid } from '../../../store/session/selector';
import { useAppSelector } from '../../../store/hooks';
import { getCVDetailsUser } from '../../../store/cvDetails/selector';
import './TopBar.scss';
import useCVTranslation from '../../../helpers/useCVTranslation';

const Name: FC = () => {
  const isLoggedIn = useSelector(getIsTokenValid);
  const userDetails = useAppSelector(getCVDetailsUser);

  const tProfession = useCVTranslation(userDetails.position);

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

  const handleNameSave = () => {

  };

  const handleProfessionSave = () => {

  };

  return (
    <div className="top-bar-component">
      <ImageEdit
        edit={isLoggedIn}
        photo={photo || ''}
      />
      <div className='name-wrapper'>
        <span className='person-name'>
          <SectionText
            text={userDetails.name}
            placeholder='Name'
            onSave={handleNameSave}
          />
        </span>
        <span className='person-profession'>
          <SectionText
            placeholder='Profession'
            text={tProfession}
            onSave={handleProfessionSave}
          />
        </span>
      </div>
    </div>
  );
}

export default Name;
