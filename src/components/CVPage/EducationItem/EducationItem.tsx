import { FC } from 'react';
import useCVTranslation from '../../../helpers/useCVTranslation';
import { getSelectedLanguage } from '../../../store/cvDetails/selector';
import { EducationItem as EducationItemType } from '../../../store/cvDetails/types';
import { useAppSelector } from '../../../store/hooks';
import DeleteItemButton from '../DeleteItemButton';
import SectionText from '../SectionText';
import './EducationItem.scss';

interface EducationItemProps extends EducationItemType {
  onDelete: (id: string) => void;
}

const EducationItem: FC<EducationItemProps> = ({ id, school, location, degree, details, startDate, endDate, onDelete }) => {
  const locale = useAppSelector(getSelectedLanguage);
  const tSchool = useCVTranslation(school);
  const tLocation = useCVTranslation(location);
  const tDegree = useCVTranslation(degree);
  const tDetails = useCVTranslation(details);

  const handleJobTitleSave = () => {

  };

  const handleJobLoactionSave = () => {

  };

  const handleJobDetailsSave = () => {

  };

  const handleJobTimeFrameSave = () => {

  };

  const handleElementDelete = () => {
    onDelete(id);
  };

  const dateString = (new Date(startDate)).toLocaleDateString(locale, { year: "numeric", month: "short"}) + ' - ' + (endDate ? (new Date(endDate)).toLocaleDateString(locale, { year: "numeric", month: "short"}) : 'Present')

  return (
    <div className='education-component'>
      <div className='education-header'>
        <span className='education-title'>
          <SectionText
            placeholder='School'
            text={tDegree}
            onSave={handleJobTitleSave}
          />
          {!!(tDegree.length && tSchool.length) && <span>,&nbsp;</span>}
          <SectionText
            placeholder='Degree'
            text={tDegree}
            onSave={handleJobTitleSave}
          />
        </span>
        <span className='education-location'>
          <SectionText
            placeholder='School location'
            text={tLocation}
            onSave={handleJobLoactionSave}
          />
        </span>
      </div>
      <span className='time-frame'>
        <SectionText
          placeholder='Time frame'
          text={dateString}
          onSave={handleJobTimeFrameSave}
        />
      </span>
      <div className='education-details'>
        <SectionText
          placeholder='Details'
          text={tDetails}
          onSave={handleJobDetailsSave}
        />
      </div>
      <DeleteItemButton onDeleteClick={handleElementDelete}/>
    </div>
  );
}

export default EducationItem;
