import "../CSS/Tips.css";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

    
function Tips(){
    const navigate = useNavigate();
    return(
        <div className="tips-page">
        <div id="main">
        <h2>Implementation Tips </h2>
        <p>Learn best practices for building secure and accessible login forms:</p>
      
        <ul>
            <li>Always validate user input both on the client and server side</li>
            <li>Never store real passwords in <sub>localStorage</sub> in production - this demo uses it only for learning</li>
            <li>Use <sub>aria-live</sub> regions for accessible status messages and error handling</li>
            <li>Implement proper session management with secure tokens in real applications</li>
            <li>Use HTTPS in production and implement rate limiting to prevent brute force attacks</li>
            <li>Consider implementing two-factor authentication for enhanced security</li>

        </ul>
        <Button 
         type="button" 
         id="learn"
         text="Got it"
         variant = "tips"
         onClick={()=>{navigate("/Login")}}/>
    
    </div>
    </div>
    )
}
export default Tips;