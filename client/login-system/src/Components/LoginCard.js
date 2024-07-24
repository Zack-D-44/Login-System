import "../App.css"

export default function LoginCard() {
    
    function handlePress(){
        let password = document.getElementById('password-textbar').value;
        let username = document.getElementById('username-textbar').value;

        fetch(`http://localhost:4000/api/login?pwood=${password}&uname=${username}`)
        .then(response => {
            if(response.ok){
                if(response.status === 200){
                    const loginCard = document.getElementById('login-card-container');
                    const container = document.getElementById('container');
                    
                    container.innerHTML = '';
                    container.innerHTML = `<h1>Hello ${username}`



                }
                

            }else{
                console.log('Bad Response')
            }
        })
        .catch(error => {
            console.log('There was an error', error)
        })
    }




    return(
        <div id="container">
                <div id="Login-card-container">
                    <h2>Enter Details</h2>

                    <div className="login-textbar">
                        <label htmlFor="username-textbar">Enter Username:</label>
                        <input type="text" id="username-textbar" ></input>
                    </div>

                    <div className="login-textbar">
                        <label htmlFor="password-textbar">Enter Password:</label>
                        <input type="text" id="password-textbar"></input>
                    </div>

                <button id="login-button" onClick={handlePress}>Login</button>

            </div>
        </div>
        



    );
}