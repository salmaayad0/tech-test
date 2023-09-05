import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequirAuth = () => {
    const loction = useLocation();

    const { userAuth } =useSelector( state => state.authslice )


  return (
    userAuth 
      ? <Outlet />
      : <Navigate to={'/'} state={{ from: loction }} replace />

  )
}

export default RequirAuth