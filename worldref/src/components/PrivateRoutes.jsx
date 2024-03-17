import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import {  useSelector } from "react-redux";


export const PrivateRoutes = ({ children }) => {
    const location = useLocation();

    const isAuth=useSelector((store) => store.authReducer.isAuth);

    return isAuth ? (
        // If authenticated and user email present, render the children
        children
    ) : (
        // If not authenticated or user email not present, redirect to the homepage
        <Navigate state={location.pathname} to="/" replace={true} />
    );
};
