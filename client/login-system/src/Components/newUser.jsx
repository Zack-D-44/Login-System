import React from "react";
import './components.css'

export default function NewUserForm(){
    
    return(
        <div className="new-user-form">
            {/* form for new user */}
            <label htmlFor="username-textbar">Enter new username:</label>
            <input type="text" id="username-textbar" />
            <br />
            <label htmlFor="password-textbar">Enter new password:</label>
            <input type="text" id="password-textbar" />
            <br />
            <button id="add-user">Add User</button>
        </div>
    );
}