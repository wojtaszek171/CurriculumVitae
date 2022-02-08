import { getSelectedLanguage } from "../store/cvDetails/selector";
import { StringValue } from "../store/cvDetails/types";
import { useAppSelector } from "../store/hooks";

export const useCVTranslation = (value: StringValue | undefined) => {
    const language = useAppSelector(getSelectedLanguage);

    if (!value)
        return '';

    const valCopy = { ...value };
    delete valCopy.id;
    
    if (!Object.keys(value).length)
        return '';

    if (!language?.length) {
        return value[Object.keys(valCopy)[0]]
    }

    return value[language] || '';
};

export default useCVTranslation;
