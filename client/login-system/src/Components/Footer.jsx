import { useNavigate } from "react-router-dom";
import "./components.css";

export default function LoggedInFooter(){
    
    const navigate = useNavigate();

    function logoutUser() {
    
        navigate('/');
    }

    return(
        <footer className="page-footer">
            <button id="log-out-button" onClick={logoutUser}>Log Out</button>
        </footer>
    );
}