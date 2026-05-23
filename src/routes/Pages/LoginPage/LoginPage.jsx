import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '@/routes/Component/LoginForm';
import style from './LoginPage.module.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      navigate('/', { replace: true });
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      navigate('/', { replace: true });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // Не ставим handleKeyDown в зависимости useEffect,
    // потому что функция пересоздаётся на каждом рендере,
    // и эффект будет постоянно отписывать/подписывать слушатель заново.
    // Нам нужен один слушатель при монтировании, поэтому оставляем [].
  }, []);

  return (
    <div className={style.loginPageContainer} onClick={handleBackdropClick}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
