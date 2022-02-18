import { CVUser, EducationItem, EmploymentItem, LanguageItem, SkillItem } from "../store/cvDetails/types";

const { REACT_APP_API_HOST, REACT_APP_API_PORT, REACT_APP_API_PATH } = window;

const HOST_URL = `${REACT_APP_API_HOST}${REACT_APP_API_PORT?.length ? ':' + REACT_APP_API_PORT : ''}${REACT_APP_API_PATH?.length ? '/' + REACT_APP_API_PATH : ''}`;

const requestStatus = async (response: Response) => {
    if (response.ok) {
        return response.json();
    } else {
        const errorRes = await response.json();
        if (errorRes.code) {
            throw errorRes;
        }
        throw new Error(response.statusText);
    }
}

const authenticateUser = (username: string, password: string) => {
    return fetch(`${HOST_URL}/api/users/authenticate`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            }),
        })
        .then(requestStatus)
        .catch(e => {
            throw e;
        });
}

const fetchCurrentUser = (token: string) =>
    fetch(`${HOST_URL}/api/users/current`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const fetchCVs = (token: string) =>
    fetch(`${HOST_URL}/api/cv`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const fetchCVById = (token: string, id: string) =>
    fetch(`${HOST_URL}/api/cv/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const createNotPublishedCV = (token: string) =>
    fetch(`${HOST_URL}/api/cv/set`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            isPublished: false
        }),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const removeCVById = (token: string, id: string) =>
    fetch(`${HOST_URL}/api/cv/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const fetchCVSkills = (token: string, id: string) =>
    fetch(`${HOST_URL}/api/cv/${id}/skills`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const createSkillItem = (token: string, id: string, skillBody: SkillItem) =>
    fetch(`${HOST_URL}/api/cv/${id}/skills/set`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(skillBody),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const fetchCVEducation = (token: string, id: string) =>
    fetch(`${HOST_URL}/api/cv/${id}/education`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const createEducationItem = (token: string, id: string, educationBody: EducationItem) =>
    fetch(`${HOST_URL}/api/cv/${id}/education/set`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(educationBody),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const updateEducationItem = (token: string, id: string, eduId: string, educationBody: EducationItem) =>
    fetch(`${HOST_URL}/api/cv/${id}/education${eduId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(educationBody),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const fetchCVEmployment = (token: string, id: string) =>
    fetch(`${HOST_URL}/api/cv/${id}/employment`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const createEmploymentItem = (token: string, id: string, employmentBody: EmploymentItem) =>
    fetch(`${HOST_URL}/api/cv/${id}/employment/set`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(employmentBody),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const fetchCVLanguages = (token: string, id: string) =>
    fetch(`${HOST_URL}/api/cv/${id}/languages`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const createLanguageItem = (token: string, id: string, languageBody: LanguageItem) =>
    fetch(`${HOST_URL}/api/cv/${id}/languages/set`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(languageBody),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const fetchCVUser = (token: string, id: string) =>
    fetch(`${HOST_URL}/api/cv/${id}/user`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const updateCVUser = (token: string, id: string, body: Partial<CVUser>) =>
    fetch(`${HOST_URL}/api/cv/${id}/user`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

export const restService = {
    authenticateUser,
    fetchCurrentUser,
    fetchCVs,
    fetchCVById,
    createNotPublishedCV,
    removeCVById,
    fetchCVSkills,
    createSkillItem,
    fetchCVEducation,
    createEducationItem,
    updateEducationItem,
    fetchCVEmployment,
    createEmploymentItem,
    fetchCVLanguages,
    createLanguageItem,
    fetchCVUser,
    updateCVUser
};

export default restService;
