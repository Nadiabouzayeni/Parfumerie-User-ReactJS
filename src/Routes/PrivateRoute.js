import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = true;  // replace with actual logic if necessary
    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
