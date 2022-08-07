import React from 'react';

const Login = () => {
    return (
        <>
            <div>
                <labe htlmFor="username">Username</labe>
                <input type="email" id="username" />
            </div>
            <div>
                <label htlmFor="password">Password</label>
                <input type="password" id="password" />
            </div>

        </>
    );
};

export default Login;