import "../CSS/Scard2.css"
function Scard2(props){
    return(
        <>
         <div className="card">
           <span className="icon">{props.icon}</span> 
            <span className="text">{props.text}</span>
            <span className="title">{props.title}</span>
            
        </div>
        </>
    )
}
export default Scard2;