import '../CSS/Input.css';
function Input ({label,id,type = "text",placeholder,required=false,errorID,variant=""}){
    return(
    <div className={`common-input ${variant}`}>
        <label htmlFor={id} className={`name ${variant}`} >{label} </label> <br/>
        <input 
          type={type} 
          id={id} 
          required={required} 
           placeholder={placeholder}/>
        <p id={errorID} className={`show-error ${variant}`}></p>
    </div>
        
        

    )
}
export default Input;