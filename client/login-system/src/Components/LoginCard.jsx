import { Link, useNavigate } from "react-router-dom";
import "../App.css"

export default function LoginCard() {
    // navigate hook // hooks can only be used/declared in component functions
    const navigate = useNavigate();

    // Function that handles login button press
    function handlePress(){
        

        // Getting password and username from form
        let password = document.getElementById('password-textbar').value;
        let username = document.getElementById('username-textbar').value;

        // Making request to API with entered name and password
        fetch(`http://localhost:4000/api/login?pwood=${password}&uname=${username}`)
        .then(response => {
            if(response.ok){
                // If request ok take away login screen 
                if(response.status === 200){
                    // const container = document.getElementById('container');
                    
                    // container.innerHTML = '';
                    // container.innerHTML = `<h1>Hello ${username}`
                    //passing username as part of the state
                    navigate('/Logged-in', {state: {username}});
                    
                }
                
            }else{
                console.log('Bad Response:', response.status);
            }
        })
        // Attempting to catch error
        .catch(error => {
            console.log('There was an error', error)
        })
    }




    return(
        // Main container everything is in 
        <div id="container">

                <div id="Login-card-container">
                    <h2>Enter Details</h2>
                    {/* Text field for username */}
                    <div className="login-textbar">
                        <label htmlFor="username-textbar">Enter Username:</label>
                        <input type="text" id="username-textbar" ></input>
                    </div>
                    {/* Text field for password */}
                    <div className="login-textbar">
                        <label htmlFor="password-textbar">Enter Password:</label>
                        <input type="text" id="password-textbar"></input>
                    </div>
                    {/* Login button */}
                <button id="login-button" onClick={handlePress}>Login</button>

            </div>
        </div>
        



    );
}