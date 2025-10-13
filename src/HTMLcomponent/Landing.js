import '../Css/Landing.css';
import Navbar from '../Component/Navbar';
import Card from '../Component/Card';
import AboutBox from '../Component/AboutBox';
import Service from '../Component/Service';
import Footer from '../Component/Footer';
const Landing = ()=>{

    return(
        <>
        <Navbar />
        <div className="heading">
            <div className="para">
                <h1 className="left">Launch your Web Tech
                 <br /> practice site in minutes</h1>
                 <p className="spara">A clean, modern starter template with Login,
                 Signup,<br /> Dashboard, Profile and Logout pages 
                 using only HTML/CSS/<br />JS and browser
                 localStorage. Perfect for learning <br /> and practicing 
                 web development fundamentals.</p>
            </div>
            <div className="right">
                   <div> <Card name="Flow 1"/></div>
            </div>
        </div>
            <div>
                <h1 className="about"> About This Project</h1>
                <p className="about-para">
                    This comprehensive template is designed for students and developers to practice modern<br />
                    web fundamentals-responsive layouts, accessible forms, client-side state management, and <br />
                    component architecture-without any frameworks or complex build processes.</p>
                <br />
                <div>
                    <AboutBox />
                    <AboutBox />
                    <AboutBox />
                    <AboutBox />
                    <AboutBox />
                    <AboutBox />
                </div>

            </div>
            <h1 className="whats">What's Included</h1>
            <div className="what-included">
                <Service />
                <Service />
                <Service />
            </div>
            <div className="what-included">
                <Service />
                <Service />
                <Service />
            </div>
            <div className="Footers">
                <Footer />
            </div>
        </>
    )
}

export default Landing;