import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const NotShow = ({ children }) => {
    const [content, setContent] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/signup" || location.pathname === "/login") {
            setContent(false);
        } else {
            setContent(true);
        }
    }, [location]);

    return (
        <div>
            {content && children}
        </div>
    );
};

export default NotShow;
