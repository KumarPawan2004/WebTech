import "../CSS/Scard.css"
import Input from "./Input";
import Button from "./Button";
import Scard2 from "./Scard2";
function Scard(){
    return(
        <>
        <div className="main-dash">
             <h3 className="head">Security Settings</h3>

             <h4 className="prefer" >🔒    Change Password</h4>
             <p className="state">Keep your account secure by using a strong password and changing it regularly. </p>

             <div className="inp-div">
                <Input
                   label="Current Password"
                   type="password" 
                   id="password1" 
                   required = {true}
                   variant="security"
                 />
                 <Input
                   label="New Password"
                   type="password" 
                   id="password2" 
                   required = {true}
                   variant="security"
                 />
            </div>
            <div>
                
                <Input
                   label="Confirm New Password"
                   type="password" 
                   id="NewPassword" 
                   required = {true}
                   variant="security"
                 /> 
            </div>
            
        
            <div className="updates">
                <span id="popup"></span>

                <Button
                 type="button" 
                 id="update"
                 text = "Update Password"
                 variant = "security"
                 />
                 <Button
                 type="button" 
                 id="clear"
                 text = "Clear"
                 variant = "security"
                 />
               
            </div>
            <hr className="hr1"/>
            
            <h4 className="prefer">🛡️  Security Information</h4>

            <div className="Security">
                <Scard2
                 icon = "📅"
                 text="Account Created"
                 title="9/4/2025"
                  />
                <Scard2
                 icon="🔄"
                 text="Last Updated"
                 title="Never Updated" />

                <Scard2
                 icon="🏢"
                 text="Seesion"
                 title="Current browser session active" />
            </div>
            
             

        </div>
        </>
    )
}
export default Scard;