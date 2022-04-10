export interface CVDetails {
    skills: SkillItem[];
    education: EducationItem[];
    employment: EmploymentItem[];
    languages: LanguageItem[];
    user: CVUser;
}
  

export interface CvDetailsState {
    isLoading: boolean;
    cvId: string | null;
    language: string;
    list: {
        [key: number]: CVDetails;
    }
}

export interface SkillItem {
    id:        string;
    cvId:      number;
    rating:    number;
    nameId:    number;
    detailsId: number;
    name:      StringValue;
    details:   StringValue;
}

export interface EducationItem {
    id:         string;
    cvId:       number;
    startDate:  Date;
    endDate:    Date;
    schoolId:   number;
    degreeId:   number;
    locationId: number;
    detailsId:  number;
    school:     StringValue;
    degree:     StringValue;
    location:   StringValue;
    details:    StringValue;
}

export interface EmploymentItem {
    id:         string;
    cvId:       number;
    company:    string;
    startDate:  Date;
    endDate:    Date;
    positionId: number;
    locationId: number;
    detailsId:  number;
    position:   StringValue;
    location:   StringValue;
    details:    StringValue;
}

export interface LanguageItem {
    id:        string;
    cvId:      number;
    rating:    number;
    nameId:    number;
    detailsId: number;
    name:      StringValue;
    details:   StringValue;
}

export interface CVUser {
    id:             string;
    cvId:           number;
    name:           string;
    phone:          string;
    email:          string;
    photo:          null;
    addressId:      number;
    positionId:     number;
    presentationId: number;
    address:        StringValue;
    position:       StringValue;
    presentation:   StringValue;
}

export interface StringValue {
    id?:    string;
    'en-us'?: string;
    'pl-pl'?: string;
}
