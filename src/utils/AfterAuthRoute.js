import {Outlet, Navigate,useSearchParams} from 'react-router-dom';
import useAuthContext from '../Hook/useAuthContext';


const  AfterAuthRoute = () => {
    const authCtx = useAuthContext();
    const [param] = useSearchParams();
    const to = param.get("path") 
  return (
    authCtx.isLoggedIn ? <Navigate to={to?to:"/"} />:<Outlet />
  )
}

export default AfterAuthRoute;
