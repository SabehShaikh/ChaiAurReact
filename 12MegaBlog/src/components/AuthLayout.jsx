import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Protected({ children,
    authentication = true }) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    // useEffect hook to handle navigation based on authentication status changes
    useEffect(() => {
        // If authentication is required and the user is not authenticated, redirect to login page
        if (authentication && authStatus !== authentication) {
            navigate("/login");
        }
        // If authentication is not required and the user is authenticated, redirect to the home page
        else if (!authentication && authStatus !== authentication) {
            navigate("/");
        }
        // Update loader status to indicate that the component has finished rendering
        setLoader(false);
    }, [authStatus, navigate, authentication]); // Re-render the component when authStatus, navigate, or authentication changes

    return loader ? <h1>Loading...</h1> : <>{children}</>
}