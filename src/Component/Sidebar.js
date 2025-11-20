import '../Css/Sidebar.css';
import {useNavigate} from 'react-router-dom';

  const Sidebar =()=>{
    const navigate = useNavigate();
    return(
        <>
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="DU">DU</div>
                <div className="user">
                    <p className="demo1">Demo User</p>
                    <p className="demo2">demouser@gmail.com</p>
                </div>
            </div>
            <p className="dash"> DASHBOARD</p>

            <div className="nav">
                <div className="Overview" onClick={()=>{navigate("/Overview")}} >🏠 Overview</div>
                <div className="Profile" >👤 Profile Settings</div>
                <div className="Security"  >🔒 Security</div>
                <div className="Notification" onClick={()=>{navigate("/Notification")}}>🔔 Notifications</div>
            </div>

            <p className="dash">QUICK ACTIONS</p>

            <div className="nav">
                <div id="Help" onClick={()=>{navigate("/Help")}}>❓ Help & Support</div>
            </div>
            
            <p className="dash account">ACCOUNT</p>
            <div className="nav">
                <div id="SignOut">🧡 Sign Out</div>
            </div>

            </div>
            
            </>
           
    )
}



export default Sidebar;