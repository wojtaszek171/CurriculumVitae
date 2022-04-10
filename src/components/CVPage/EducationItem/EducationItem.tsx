import { FC } from 'react';
import useCVTranslation from '../../../helpers/useCVTranslation';
import { deleteEducationItem, updateEducationItem } from '../../../store/cvDetails/cvDetailsSlice';
import { getSelectedLanguage } from '../../../store/cvDetails/selector';
import { EducationItem as EducationItemType } from '../../../store/cvDetails/types';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import DeleteItemButton from '../DeleteItemButton';
import SectionText from '../SectionText';
import './EducationItem.scss';

interface EducationItemProps extends EducationItemType {}

const EducationItem: FC<EducationItemProps> = ({ id, school, location, degree, details, startDate, endDate }) => {
  const dispatch = useAppDispatch();
  const locale = useAppSelector(getSelectedLanguage);
  const tSchool = useCVTranslation(school);
  const tLocation = useCVTranslation(location);
  const tDegree = useCVTranslation(degree);
  const tDetails = useCVTranslation(details);

  const handleSchoolSave = (school: string) => {
    dispatch(updateEducationItem({ id, body: { school: { [locale]: school }}}));
  };

  const handleDegreeSave = (degree: string) => {
    dispatch(updateEducationItem({ id, body: { degree: { [locale]: degree }}}));
  };

  const handleSchoolLocationSave = (location: string) => {
    dispatch(updateEducationItem({ id, body: { location: { [locale]: location }}}));
  };

  const handleSchoolDetailsSave = (details: string) => {
    dispatch(updateEducationItem({ id, body: { details: { [locale]: details }}}));
  };

  const handleSchoolTimeFrameSave = () => {
    // TODO: redesign time edit
  };

  const handleElementDelete = () => {
    dispatch(deleteEducationItem(id))
  };

  const dateString = (startDate ? (new Date(startDate)).toLocaleDateString(locale, { year: "numeric", month: "short"}) : '') + ' - ' + (endDate ? (new Date(endDate)).toLocaleDateString(locale, { year: "numeric", month: "short"}) : 'Present')

  return (
    <div className='education-component'>
      <div className='education-header'>
        <span className='education-title'>
          <SectionText
            placeholder='School'
            text={tSchool}
            onSave={handleSchoolSave}
          />
          {!!(tDegree.length && tSchool.length) && <span>,&nbsp;</span>}
          <SectionText
            placeholder='Degree'
            text={tDegree}
            onSave={handleDegreeSave}
          />
        </span>
        <span className='education-location'>
          <SectionText
            placeholder='School location'
            text={tLocation}
            onSave={handleSchoolLocationSave}
          />
        </span>
      </div>
      <span className='time-frame'>
        <SectionText
          placeholder='Time frame'
          text={dateString}
          onSave={handleSchoolTimeFrameSave}
        />
      </span>
      <div className='education-details'>
        <SectionText
          placeholder='Details'
          text={tDetails}
          onSave={handleSchoolDetailsSave}
        />
      </div>
      <DeleteItemButton onDeleteClick={handleElementDelete}/>
    </div>
  );
}

export default EducationItem;
