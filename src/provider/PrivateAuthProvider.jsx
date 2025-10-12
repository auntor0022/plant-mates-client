import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Loader';

const PrivateAuthProvider = ({ children }) => {

    const location = useLocation();
    // console.log(location)
    
    const { user, loading } = use(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }

    if (user && user?.email) {
        return children;
    }


    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateAuthProvider;