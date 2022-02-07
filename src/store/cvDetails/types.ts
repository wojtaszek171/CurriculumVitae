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
    language: string | null;
    list: {
        [key: number]: CVDetails;
    }
}

export interface SkillItem {
    id:        number;
    cvId:      number;
    rating:    number;
    nameId:    number;
    detailsId: number;
    name:      StringValue;
    details:   StringValue;
}

export interface EducationItem {
    id:         number;
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
    id:         number;
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
    id:        number;
    cvId:      number;
    rating:    number;
    nameId:    number;
    detailsId: number;
    name:      StringValue;
    details:   StringValue;
}

export interface CVUser {
    id:             number;
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
    id?:    number;
    en_us: string;
    pl_pl: string;
}
