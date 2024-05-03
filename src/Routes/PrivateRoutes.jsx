import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoutes;