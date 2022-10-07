import React, { useState } from 'react';

import { useLocalState } from '../util/useLocalStorage';
import { useNavigate, Navigate } from 'react-router-dom';
import fetchService from '../Services/httpService';

const PrivateRoute = ({ children }) => {

    const navigate = useNavigate();
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [isLoading, setIsLoading] = useState(true);
    const [isValid, setIsValid] = useState(null);

    //if the token exist do another check
    if (jwt) {
        fetchService(`/api/auth/validate?token=${jwt}`, "GET", jwt)
            .then(isValid => {
                setIsValid(isValid);
                setIsLoading(false);
                // return isValid === true ? children : <Navigate to="/login" />;
            })

    } else {

        return <Navigate to="/login" />
    }

    return isLoading ? (<div>Laoding...</div>) : isValid === true ? (children) : (<Navigate to="/login" />);

};

export default PrivateRoute;