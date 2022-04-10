import { FC } from 'react';
import useCVTranslation from '../../../helpers/useCVTranslation';
import { getSelectedLanguage } from '../../../store/cvDetails/selector';
import { EmploymentItem } from '../../../store/cvDetails/types';
import { useAppSelector } from '../../../store/hooks';
import DeleteItemButton from '../DeleteItemButton';
import SectionText from '../SectionText';
import './JobItem.scss';

const JobItem: FC<EmploymentItem> = ({ company, position, location, startDate, endDate, details }) => {
  const locale = useAppSelector(getSelectedLanguage);
  const tPosition = useCVTranslation(position);
  const tLocation = useCVTranslation(location);
  const tDetails = useCVTranslation(details);

  const handleTitleSave = () => {

  }

  const handleLocationSave = () => {

  }

  const handleCompanySave = () => {

  }

  const handleTimeFrameSave = () => {

  }

  const handleDetailsSave = () => {

  }

  const handleElementDelete = () => {

  }

  const dateString = (new Date(startDate)).toLocaleDateString(locale, { year: "numeric", month: "short"}) + ' - ' + (endDate ? (new Date(endDate)).toLocaleDateString(locale, { year: "numeric", month: "short"}) : 'Present')

  return (
    <div className='job-component'>
      <div className='job-header'>
        <span className='job-title'>
          <SectionText
            placeholder='Profession'
            text={tPosition}
            onSave={handleTitleSave}
          />
          {!!(tPosition.length && company.length) && <span>,&nbsp;</span>}
          <SectionText
            placeholder='Location'
            text={company}
            onSave={handleCompanySave}
          />
        </span>
        <span className='job-location'>
          <SectionText
            placeholder='Office location'
            text={tLocation}
            onSave={handleLocationSave}
          />
        </span>
      </div>
      <span className='time-frame'>
        <SectionText
          placeholder='Time Frame'
          text={dateString}
          onSave={handleTimeFrameSave}
          editable={false}
        />
      </span>
      <div className='job-details'>
        <SectionText
          placeholder='Details'
          text={tDetails}
          onSave={handleDetailsSave}
        />
      </div>
      <DeleteItemButton onDeleteClick={handleElementDelete}/>
    </div>
  );
}

export default JobItem;
