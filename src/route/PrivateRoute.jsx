import React, { useContext, useState } from 'react';
import AuthContext from '../provider/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='w-full h-screen flex items-center justify-center'>
            <span className="loading loading-spinner loading-lg"></span>
            <p>Loading...</p>
        </div>;
    }
    
    if(user){
        return children;
    };
    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;