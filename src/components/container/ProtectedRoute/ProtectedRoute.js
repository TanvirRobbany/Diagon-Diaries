import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Route, Redirect} from 'react-router-dom';
import { BASE_URL } from '../../../config/config';

function ProtectedRoute({ children, ...rest }) {
    // let auth = useAuth();
    // const [checkAuth, setCheckAuth] = useState([]);
    const [auth, setAuth] = useState([]);

    const getCheckAuth = async () => {
      try{
       const options = {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        }

        const res = await axios.get(`${BASE_URL}/api/auth/checkauth`, options);
        console.log(res.data);
        setAuth(res.data);
      }
      catch(err){
        setAuth(false)
      }

    }

    useEffect(() => {
        getCheckAuth();
    }, []);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
            children
          ) : (
            <Redirect
              to='/login'
            />
          )
        }
      />
    );
  }

  export default ProtectedRoute;