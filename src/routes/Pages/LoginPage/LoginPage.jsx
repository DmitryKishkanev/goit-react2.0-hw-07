import LoginForm from '@/routes/Component/LoginForm';
import style from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={style.loginPageContainer}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
