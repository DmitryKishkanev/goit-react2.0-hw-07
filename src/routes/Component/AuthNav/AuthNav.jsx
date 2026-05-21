import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={style.authNavBox}>
      <NavLink to="/login">
        <button>Log in</button>
      </NavLink>

      <NavLink to="/register">
        <button>Sign up</button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
