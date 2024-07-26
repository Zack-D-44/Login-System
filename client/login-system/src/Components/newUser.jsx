import React from "react";
import './components.css'

export default function NewUserForm(){
    
    // make post request
    function handleNewUser(){
        // new username and password values
        const newUserUsername = document.getElementById('username-textbar').value;
        const newUserPassword = document.getElementById('password-textbar').value;

        // make post request for user profile
        
        fetch(`http://localhost:4000/api/add-new-user?uname=${newUserUsername}&pwood=${newUserPassword}`, {
            method: "POST"
        })
        .then(response => {
            if(response.ok){
                // if user added log to console
                console.log('New user added');
            }
        })
        .catch(err => {
            // log error 
            console.log("When trying to add a new user there was a problem, this is the error", err);
        })
    };

    return(
        <div className="new-user-form">
            {/* form for new user */}
            <label htmlFor="username-textbar">Enter new username:</label>
            <input type="text" id="username-textbar" />
            <br />
            <label htmlFor="password-textbar">Enter new password:</label>
            <input type="text" id="password-textbar" />
            <br />
            <button id="add-user" onClick={handleNewUser}>Add User</button>
        </div>
    );
}