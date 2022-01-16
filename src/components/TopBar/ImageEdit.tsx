import { ImageUpload } from 'pwojtaszko-design';
import { FC } from 'react';
import './TopBar.scss';

interface ImageEditProps {
    edit: boolean;
    photo: string;
}

const ImageEdit: FC<ImageEditProps> = ({ photo, edit }) => {

  return (
    <div className='person-photo'>
        {edit ?
            <ImageUpload
                photo={photo}
                edit={edit}
                round
            /> :
            <img
                className='person-photo-img'
                src={photo}
                alt='cv person'
            />
        }
    </div>
  );
}

export default ImageEdit;
