import { FC } from 'react';
import useCVTranslation from '../../../helpers/useCVTranslation';
import { deleteEmploymentItem, updateEmploymentItem } from '../../../store/cvDetails/cvDetailsSlice';
import { getSelectedLanguage } from '../../../store/cvDetails/selector';
import { EmploymentItem } from '../../../store/cvDetails/types';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import DeleteItemButton from '../DeleteItemButton';
import SectionText from '../SectionText';
import './JobItem.scss';

interface JobItemProps extends EmploymentItem {}

const JobItem: FC<JobItemProps> = ({ id, company, position, location, startDate, endDate, details }) => {
  const dispatch = useAppDispatch();
  const locale = useAppSelector(getSelectedLanguage);
  const tPosition = useCVTranslation(position);
  const tLocation = useCVTranslation(location);
  const tDetails = useCVTranslation(details);

  const handleTitleSave = (position: string) => {
    dispatch(updateEmploymentItem({ id, body: { position: { [locale]: position }}}));
  }

  const handleLocationSave = (location: string) => {
    dispatch(updateEmploymentItem({ id, body: { location: { [locale]: location }}}));
  }

  const handleCompanySave = (company: string) => {
    dispatch(updateEmploymentItem({ id, body: { company }}));
  }

  const handleTimeFrameSave = () => {
    // TODO: redesign time edit
  }

  const handleDetailsSave = (details: string) => {
    dispatch(updateEmploymentItem({ id, body: { details: { [locale]: details }}}));
  }

  const handleDelete = () => {
    dispatch(deleteEmploymentItem(id));
  }

  const dateString = (startDate ? (new Date(startDate)).toLocaleDateString(locale, { year: "numeric", month: "short"}) : '') + ' - ' + (endDate ? (new Date(endDate)).toLocaleDateString(locale, { year: "numeric", month: "short"}) : 'Present')

  return (
    <div className='job-component'>
      <div className='job-header'>
        <span className='job-title'>
          <SectionText
            placeholder='Profession'
            text={tPosition}
            onSave={handleTitleSave}
          />
          {!!(tPosition?.length && company?.length) && <span>,&nbsp;</span>}
          <SectionText
            placeholder='Company'
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
      <DeleteItemButton onDeleteClick={handleDelete}/>
    </div>
  );
}

export default JobItem;
