import '../Css/Notification.css';   
import AppBar from "../Component/AppBar";
import Sidebar from "../Component/Sidebar";
import Ncard from '../Component/Ncard';

const Notification =()=>{
    return(
        <div className="main-container">
            <div className="left-sidebar">
            <Sidebar />
            </div> 
            <div className="middle-container">
                <div className="app-bar">
                <AppBar />
                </div>
                <div className="main-dash">
                <h1>Notifications</h1>
                <p className="firstText">🔔 Notification Preferences</p>
                 <div>Manage how and when you receive notifications about your account activity</div>
                
                <div className="notification-card">
                    <Ncard variant='first'
                           icon="✉️"
                           title="Email Notifications"
                           text="Receive important updates via email"
                           notification="✅  Enable email notifications"
                    />
                    <Ncard variant='first'
                     icon="🔒"
                     title="Security Alerts"
                     text="Get notified about security changes"
                     notification="✅  Enable security alerts" />
                </div>
                
                <h4 className="activity">📅 Recent Activity</h4> 

                <Ncard variant='second'
                 icon="✅"
                 title="Profile Updated"
                 text="Your profile information was successfully updated "
                 notification="Today"
                />

                
                </div>
            </div>
        </div>
    )
}

export default Notification;