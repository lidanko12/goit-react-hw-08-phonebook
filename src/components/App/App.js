

import Container from '../Conteiner/Container';
import {useEffect,Suspense,lazy} from 'react'
import { Route , Switch} from 'react-router-dom';
import s from './App.module.css';
import AppBar from '../../components/AppBar';
import { authOperations,authSelectors } from '../../redux/auth';
import { useDispatch,useSelector  } from 'react-redux';
import PrivateRoute from '../../PrivateRoute'
import PublicRoute from '../../PublicRoute';
import Loader from 'react-loader-spinner';

const HomeView = lazy(() => import('../../Views/HomeView'));
const LoginView = lazy(() => import('../../Views/LoginView'));
const RegisterView = lazy(() => import('../../Views/RegisterView'));
const ContactsView = lazy(() => import('../../Views/ContactsView'));




export default function App() {

  const dispatch = useDispatch();
  const isFenchingCurrentUser = useSelector(authSelectors.getFetchingUser)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFenchingCurrentUser && ( <Container>
      <AppBar />
      <Switch>
        <Suspense fallback={<Loader
                                type="ThreeDots"
                                color="#ffffff"
                                height={35}
                                width={35}
                            />}>
          <PublicRoute exact path="/">
          <HomeView/>
          </PublicRoute>
          <PublicRoute  exact path="/login" restricted redirectTo='/contacts'>
          <LoginView/>
          </PublicRoute>
          <PublicRoute  exact path="/register" restricted>
          <RegisterView/>
        </PublicRoute>
        <PrivateRoute path="/contacts" redirectTo='/login'>
          <ContactsView/>
        </PrivateRoute>
        </Suspense>
    </Switch>
      </Container>
  ))
}




