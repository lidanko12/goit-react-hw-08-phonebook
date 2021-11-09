import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from '@mui/material/Button';
import s from './UserMenu.module.css';
import defaultAvatar from '../../images/default-avatar.png'


export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>  <span className={s.login}>Login</span> {name}</span>
       <Button variant="contained"  type="button" onClick={() => dispatch(authOperations.logOut())}>LogOut</Button>
    </div>
  );
}