import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '@/redux/auth/authSlice';
import style from './LoginForm.module.css';

const LoginForm = () => {
  const [loginValue, setLoginValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn(loginValue));
    e.currentTarget.reset();
    navigate('/', { replace: true });
  };

  return (
    <div className={style.loginFormBox}>
      <h1 className={style.loginFormTitle}>Log In</h1>
      <form className={style.loginForm} onSubmit={handleSubmit}>
        <input
          className={style.loginFormField}
          type="text"
          name="login"
          onChange={e => setLoginValue(e.target.value)}
        />

        <button
          className={style.LoginFormButton}
          type="submit"
          disabled={!loginValue.trim()}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
