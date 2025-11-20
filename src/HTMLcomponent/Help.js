import '../Css/Help.css';   
import AppBar from "../Component/AppBar";
import Sidebar from "../Component/Sidebar";
import Hpara from '../Component/Hpara';

const Help =()=>{
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
                <h1>Help & Support</h1>
                <p className="firstText">❓ Frequently Asked Questions</p>

                <div className="paras">
                    <div className="para1"><Hpara heading="How do I update my profile?" text="Click on 'Profile Settings' in the sidebar to edit your personal information, address, and other details." /></div>

                    <div className="para2"><Hpara heading="Is my data secure?"  text="This is a demo application that stores data in your browser's localStorage. In a production app, data would be encrypted and stored securely on servers."  /></div>

                    <div className="para3"><Hpara heading="How do I change my password?" text="Go to 'Security' in the sidebar, enter your current password, then set and confirm your new password." /></div>
                </div>
                
                <p className='contact'> 📞 Contact Us</p>
                <p className='cont-text'>This is a demonstration application for learning web development. In a real application, you would find contact information and support options here.</p>
                

                
                </div>
            </div>
        </div>
    )
}

export default Help;