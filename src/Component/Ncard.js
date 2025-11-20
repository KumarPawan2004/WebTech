import '../Css/Ncard.css';

const Ncard =({variant = "",icon,title,text,notification})=>{
    return(
            <div className={`Ncard-${variant}`}>
                <p className="icon">{icon}</p>
                <span className="title">{title}</span>
                <span className="text">{text}</span>
            <span className="notification">{notification}</span>
                
            </div>
        )
}

export default Ncard;