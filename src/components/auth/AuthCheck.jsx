import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase/firebaseConfig';
import Login from "./Login";
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/slices/authslice';

const AuthCheck = () => {
  const dispatch = useDispatch();

  const [loginUser, setloginUser] = useState(null);

  useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
            user ? setloginUser(user) : setloginUser(null)
        })

        return () => listen();
    },[])

    const handleSignOut = () => {
      dispatch(logOut())
    };


  return (
    <>
    { loginUser ? 
         (<li className='dropdown-item'>
         <p>{loginUser.email} </p> 
         <button 
          className='btn btn-primary btn-sm'
          onClick={handleSignOut}
        >
            Sign out
        </button>
         </li>
         ) : (
            <Login />
         )}
    </>
  )
}

export default AuthCheck