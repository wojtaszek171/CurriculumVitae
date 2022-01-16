import { ChangeEvent, FC, useRef } from 'react';
import './EditableText.scss';


interface TextAreaProps {
  text: string;
  onChange: (newValue: string) => void;
  editMode: boolean
  resizeable?: boolean;
  autoExpand?: boolean;
}

const TextArea: FC<TextAreaProps> = ({ text, onChange, resizeable, autoExpand, editMode }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onTextAreaInput = () => {
    const textareaCurrent = textareaRef.current;
    if (textareaCurrent && autoExpand) {
      textareaCurrent.style.height = ""; /* Reset the height*/
      textareaCurrent.style.height = textareaCurrent.scrollHeight + "px";
    }
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  }

  return (
    <div className={`pwd-textarea-component${resizeable ? ' resizeable' : ''}`}>
      {editMode
        ? <textarea
          ref={textareaRef}
          onChange={handleTextareaChange}
          onInput={onTextAreaInput}
        >
          {text}
        </textarea>
        : <span className='pwd-textarea-value'>{text}</span>
      }
    </div>
  );
}

export default TextArea;
