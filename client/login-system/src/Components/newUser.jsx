import React, { useState } from "react";
import './components.css'


export default function NewUserForm(){
    const [messageVisible, setMessageVisibility] = useState(false);
    // make post request
    function handleNewUser(){
        // new username and password values
        const newUserUsername = document.getElementById('username-textbar').value;
        const newUserPassword = document.getElementById('password-textbar').value;

        if(newUserPassword && newUserUsername){
            fetch(`http://localhost:4000/api/add-new-user?uname=${newUserUsername}&pwood=${newUserPassword}`, {
                method: "POST"
            })
            .then(response => {
                if(response.ok){
                    // if user added log to console
                    console.log('New user added');
                    if(messageVisible){
                        const invalidDetailMessage = document.getElementById('error-message');
                        invalidDetailMessage.remove();
                        setMessageVisibility(false);
                    }
    
                }
            })
            .catch(err => {
                // log error 
                console.log("When trying to add a new user there was a problem, this is the error", err);
            })
        }else {
            if(!messageVisible){
                // construct html element
                const messageContainer = document.getElementById('message-container');
                const message = document.createElement("p");
                message.innerText = "Invalid details";
                message.setAttribute('id', 'error-message');
                // append element to container
                messageContainer.appendChild(message);
                // set state to show visibility
                setMessageVisibility(true);
            }

            
        }


        
        
    };

    return(
        <div className="new-user-form">
            {/* form for new user */}
            <label htmlFor="username-textbar">Enter new username:</label>
            <input type="text" id="username-textbar" />
            <br />
            <label htmlFor="password-textbar">Enter new password:</label>
            <input type="text" id="password-textbar" />
            <div id="message-container"></div>
            <br />
            <button id="add-user" onClick={handleNewUser}>Add User</button>
        </div>
    );
}