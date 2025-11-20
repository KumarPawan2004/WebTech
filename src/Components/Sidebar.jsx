import "../CSS/Sidebar.css";
// import { useNavigate } from "react-router-dom";
function Sidebar(){
    // const navigate = useNavigate()
    // const handleclick = ()=>{

    //     navigate("/Security")

    // }
    return(
        <>
        <div className="user-info">
            <div className="user-logo">DU</div>
            <div className="emails">
                <span id="name">Demo User</span>
                <span className="email" id="name-email">demo@webtech.practice</span>
            </div>
        </div>

        
        <p className="dash"> DASHBOARD</p>

        <div className="nav">
            <div id="Overview">🏠 Overview</div>
            <div id="Profile" className="active">👤 Profile Settings</div>
            <div id="Security" className="active" >🔒 Security</div>
            <div id="Notification">🔔 Notifications</div>
        </div>

        <p className="dash">QUICK ACTIONS</p>

        <div className="nav">
            <div id="Help">❓ Help & Support</div>
        </div>
        
        <p className="dash account">ACCOUNT</p>
        <div className="nav">
            <div id="SignOut">🧡 Sign Out</div>
        </div>

     </>
    )
}
export default Sidebar;