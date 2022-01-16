import { FC, useState } from 'react';
import EditableText from '../EditableText';
import './SectionText.scss';

interface TextAreaProps {
  text: string;
  onChange: (newValue: string) => void;
  editable?: boolean;
  onSave?: () => void;
  onRemove?: () => void;
  editButtonsAlwaysVisible?: boolean;
  removeable?: boolean;
}

const SectionText: FC<TextAreaProps> = ({ text, editable, onChange, onSave, onRemove }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={'section-text-component'}>
      <EditableText
        text={text}
        onChange={onChange}
        editMode={editMode}
        autoExpand
      />
      {editable && <div className={`section-text-edit-buttons${editMode ? ' visible' : ''}`}>
        {!editMode && <span
          className='edit-button'
          onClick={() => setEditMode(true)}
        >
          ✎
        </span>}
        {editMode && <span
          className='save-button'
          onClick={onSave}
        >
          ✓
        </span>}
        {editMode && <span
          className='cancel-button'
          onClick={() => setEditMode(false)}
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
