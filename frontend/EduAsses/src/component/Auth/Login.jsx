import React from "react";
import "./login.css";

export default function Login() {
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <h2 className="form-title">Login Form</h2>
                <form>
                    <div className="form-holder-login">
                        <input  type="email" className="input" placeholder="Email" />
                        <input type="password" className="input" placeholder="Password" />
                    </div>
                    <button className="submit-btn">Login</button>
                </form>
                <a href="#" className="forgot-password">Forgot password</a>
            </div>
        </div>
    );
}