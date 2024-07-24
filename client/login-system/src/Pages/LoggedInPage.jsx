import React from "react";
import App from "../App";
import { useLocation } from "react-router-dom";
export default function LoggedInPage(){
    const location = useLocation();
    // Decontructing the username from state
    const {username} = location.state || {};

    function boxAppear(){
        
    }

    return(
        <div className="App">
            <h1>Hello {username}</h1>
            <div className="add-user-container">

            </div>
            
            <button id="login-button" onClick={boxAppear}>
                Add New User
            </button>

        </div>
        
    );
}