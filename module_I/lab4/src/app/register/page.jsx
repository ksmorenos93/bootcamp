// pages/register.js

import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" required />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register; // Ensure this is a default ex