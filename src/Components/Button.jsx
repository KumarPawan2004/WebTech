import "../CSS/Button.css"
function Button({type,id,text,variant="",onClick}){

    return(
        <div>
        <button 
            type={type} 
            id={id}
            className={`btn-${variant}`}
            onClick={onClick}>
                {text}  
           
         </button>
           

        </div>
    )
}
export default Button;