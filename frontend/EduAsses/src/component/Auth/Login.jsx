import React from "react";
import "./login.css";

export default function Login() {
    return (
<div class="login-container">
    <div class="login-wrapper">
        <h2 class="form-title">Login Form</h2>
<form>
    <div class="form-holder">
        <input type="email"  class="input" placeholder="Email"/>
<input type="password" class="input" placeholder="Password" />
    </div>
    <button class="submit-btn">Login</button>
</form>
<a href="#" class="forgot-password">Forgot password</a>
    </div>
</div>
);}