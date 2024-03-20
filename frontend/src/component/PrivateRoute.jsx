import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = verifyToken(); // Verify the token
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [navigate]);

    const verifyToken = () => {
        // Implement your token verification logic here
        const token = sessionStorage.getItem('token'); // Assuming token is stored in sessionStorage
        // Example logic: Check if token is present and valid (e.g., not expired)
        return token && isValidToken(token); // Replace isValidToken with your logic to check token validity
    };

    const isValidToken = (token) => {
        // Example logic to check if token is valid (replace this with your actual logic)
        // For demonstration purposes, assume token is valid if it exists
        return !!token;
    };

    return (
        <>
            <Outlet />
        </>
    );
};

export default PrivateRoute;
