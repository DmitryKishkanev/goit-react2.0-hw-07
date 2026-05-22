import { useDispatch } from 'react-redux';
import { useGetState } from '@/redux/useGetState';
import { logOut } from '@/redux/authSlice';
import style from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { login } = useGetState();

  return (
    <div className={style.userMenuBox}>
      <p className={style.userMenuText}>Hi, {login}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
