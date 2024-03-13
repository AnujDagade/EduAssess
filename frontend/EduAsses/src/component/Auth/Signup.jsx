import React, { useState } from "react";
import "./Signup.css";

export default function Signup(event) {
    //here you can create useState hooks to store the input values
    //This is where you are going to store the input values
    // evrytime the user types in the input fields
    const [data, setData] = useState({})
        //const [store, setStore] = useState(event.target.value)





    function onInputChange(event) {
        const formData = {
            //Here I am spreading all the values in the data object
            // and then I am adding the new value to the object
            ...data,
            [event.target.name]: event.target.value
        }
        setData(formData);
    }

    console.log(data);
    //create a function to handle the form submission as I did in the note summary component


    return (

        <div className="form-container">
            <div className="sign-up-container">
                <h1 className="form-title" id="signup">Sign up</h1>
                <form accept="#">
                    <div className="form-holder-signup">
                        <input onChange={onInputChange} type="text" className="input" placeholder="Name" />
                        <input onChange={onInputChange} type="email" className="input" placeholder="Email" />
                        <input onChange={onInputChange} type="password" className="input" placeholder="Password" />
                    </div>
                    <button onClick={Signup} className="submit-btn">Signup</button>
                </form>
            </div>
        </div>);
}