import '../Css/Overview.css';  
import AppBar from "../Component/AppBar";
import Sidebar from "../Component/Sidebar";
import Ocard1 from '../Component/Ocard1';
import Ocard2 from '../Component/Ocard2';


const Overview =()=>{
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
                <h1>Welcome back,Demo user 👋</h1>
                <p className="firstText">Manage your profile settings and account preference.your data is securely stred in your browser's localStorage.</p>

                <div className="card-group">
                    <div className="cardss"><Ocard1 title="Theme" text={<>Dark/Light mode persisted <br /> across all pages</>} /></div>
                    <div className="cardss"><Ocard1 title="Authentication" text={<>Secure session stored in<br /> browser storage</>} /></div>
                    <div className="cardss"><Ocard1 title="Profile" text={<>20% profile completed (1/5 <br /> fields)</>} /></div>
                    <div className="cardss"><Ocard1 title="Security" text={<>Password protection and <br /> account security</>} /></div>
                </div>

                <div className="quick">Quick Actions</div>

                <div className="card-group">
                    <div className="cardss"><Ocard2 title="Edit Profile" text="Update your personal information" /></div>
                    <div className="cardss"><Ocard2 title="Change Password" text="Update your Account security" /></div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;