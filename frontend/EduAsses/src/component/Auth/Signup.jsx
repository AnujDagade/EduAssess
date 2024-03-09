import React from "react";
import "./Signup.css";

export default function Signup() {
    return (

        <div class="form-container">
            <div class="sign-up-container">
                <h1 class="form-title" id="signup">Sign up</h1>
                <form accept="#">
                    <div class="form-holder-signup">
                        <input type="text" class="input" placeholder="Name" />
                        <input type="email" class="input" placeholder="Email" />
                        <input type="password" class="input" placeholder="Password" />
                    </div>
                    <button class="submit-btn">Signup</button>
                </form>
            </div>
        </div>);
}