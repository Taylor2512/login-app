import React, { useState } from 'react';
import styles from './Login.module.scss';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className={styles['login-container']}>
        <form onSubmit={handleSubmit} className={styles['login-form']}>
            <div className={styles['login-form__group']}>
                <label htmlFor="username" className={styles['login-form__group__label']}>Username:</label>
                <input
                    type="text"
                    id="username"
                    className={styles['login-form__group__input']}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className={styles['login-form__group']}>
                <label htmlFor="password" className={styles['login-form__group__label']}>Password:</label>
                <input
                    type="password"
                    id="password"
                    className={styles['login-form__group__input']}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className={styles['login-form__button-container']}>
                <button type="submit" className={styles['login-form__button-container__button']}>Login</button>
            </div>
            <div className={styles['login-form__button-container']}>
                <button type="submit" className={styles['login-form__button-container__button']}>Registrarse</button>
            </div>
        </form>
    </div>
  );
};

export default Login;