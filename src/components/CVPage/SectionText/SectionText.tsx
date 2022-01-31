import { FC, MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsTokenValid } from '../../../store/session/selector';
import EditableText from '../EditableText';
import './SectionText.scss';

interface TextAreaProps {
  text: string;
  onChange?: (newValue: string) => void;
  editable?: boolean;
  onSave?: () => void;
  onRemove?: () => void;
  placeholder?: string;
  editButtonsAlwaysVisible?: boolean;
  removeable?: boolean;
}

const SectionText: FC<TextAreaProps> = ({ text, editable, placeholder, onChange, onSave, onRemove }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const isLoggedIn = useSelector(getIsTokenValid);

  const handleEditChange = (str: string) => {
    setEditedText(str);

    if (onChange)
      onChange(str);
  }

  const handleCancel = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();

    setEditMode(false);
    setEditedText(text);
    if (onChange)
      onChange(text);
  };

  const handleSave = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    setEditMode(false);

    if (onSave)
      onSave();
  };

  const canEdit = (editable !== undefined) ? editable : isLoggedIn;

  return (
    <div
      className={'section-text-component'}
      onClick={() => setEditMode(true)}
    >
      <EditableText
        text={editedText}
        onChange={handleEditChange}
        editMode={editMode}
        placeholder={placeholder}
        autoExpand
      />
      {canEdit && <div className={`section-text-edit-buttons${editMode ? ' visible' : ''}`}>
        {!editMode && <span
          className='edit-button'
          onClick={() => setEditMode(true)}
        >
          ✎
        </span>}
        {editMode && <span
          className='save-button'
          onClick={handleSave}
        >
          ✓
        </span>}
        {editMode && <span
          className='cancel-button'
          onClick={handleCancel}
        >
          ✕
        </span>}
        {onRemove && <span
          className='remove-button'
          onClick={onRemove}
        >
          ✕
        </span>}
      </div>}
    </div>
  );
}

export default SectionText;
