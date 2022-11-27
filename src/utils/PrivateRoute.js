import {Outlet, Navigate, createSearchParams, useLocation} from 'react-router-dom';
import useAuthContext from '../Hook/useAuthContext';


const  PrivateRoute = () => {
    const location = useLocation().pathname;
    const authCtx = useAuthContext();
    const param = createSearchParams({path:location}).toString()
  return (
    authCtx.isLoggedIn ? <Outlet />:<Navigate to={`/login?${param}`} />
  )
}

export default PrivateRoute;
