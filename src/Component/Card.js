import '../Css/Card.css';
const Card = (props)=>{
    return (
        <div className="box">
            <h2 className="Chead">Complete Auth {props.name}</h2>
            <p className="content">Seamless Login → Signup → Dashboard <br />
              → Logout flow with persistent demo<br />
              storage and validation</p>
              <button className="Larrow"> &lt; </button>
              <button className="Rarrow"> &gt; </button>

              <div className="vert">
                <button className="btn1"></button>
                <button className="btn2"></button>
                <button className="btn3"></button>
              </div>

        </div>
    )
}

export default Card;