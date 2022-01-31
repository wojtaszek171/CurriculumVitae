import React, { FC, useState } from 'react';
import { Login } from 'pwojtaszko-design';
import { loginUsingCredentials } from '../../store/session/sessionSlice';
import { useAppDispatch } from '../../store/hooks';

interface LoginContainerProps {
    onLogin?: Function;
}

const LoginContainer: FC<LoginContainerProps> = ({ onLogin }) => {
    const [message, setMessage] = useState('');
    const dispatch = useAppDispatch();

    const handleLogin = (login: string, password: string) => {
        dispatch(loginUsingCredentials({ login, password }))
            .then(() => {
                setMessage('');

                if (onLogin) {
                    onLogin();
                }
            })
            .catch(() => {
                setMessage('Wrong credentials');
            });
    };

    return (
        <Login
            message={message}
            onLogin={handleLogin}
        />
    );
}

export default LoginContainer;
