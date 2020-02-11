import React from 'react';
import './style.css'

class Register extends React.Component {

    render = () => {
        return (
            <form action="" className="form">

                <div className="forename">
                    <label for="forename" className="label label-forename">Forename:</label>
                    <input type="text" name="forename" id="forename" />
                </div>
        
                <div className="surname">
                    <label for="surname" className="label label-surname">Surname:</label>
                    <input type="text" name="surname" id="surname" />
                </div>
        
                <div className="email">
                    <label for="email" className="label label-email">Email:</label>
                    <input type="text" name="email" id="email" />
                </div>
        
                <div className="login">
                    <label for="login" className="label label-login">Login:</label>
                    <input type="text" name="login" id="login" />
                </div>
        
                <div className="password">
                    <label for="password" className="label label-password">Password:</label>
                    <input type="password" name="password" id="password" />
                </div>
        
                <div className="confirm-password">
                    <label for="confirm-password" className="label label-confirm-password">Confirm password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />
                </div>
        
                <div className="button">
                    <button className="btn">Войти</button>
                </div>
            
        </form>
        );
    };
}

export default Register
