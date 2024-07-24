import React, { useState } from "react";
import App from "../App";
import { useLocation } from "react-router-dom";
import NewUserForm from "../Components/newUser";

export default function LoggedInPage(){
    const location = useLocation();
    // Decontructing the username from state
    const {username} = location.state || {};

    const [isNewUserFormVisible, setNewUserFormVisible] = useState(false);

    function boxAppear(){
        setNewUserFormVisible(prevState => !prevState);
        const button = document.getElementById('login-button')
        button.remove();
    }

    return(
        <div className="App">
            <h1>Hello {username}</h1>
            <div className="add-user-container">

            </div>
            
            <button id="login-button" onClick={boxAppear}>
                Add New user
            </button>

            {isNewUserFormVisible && <NewUserForm />}

        </div>
        
    );
}