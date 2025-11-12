import '../CSS/Input.css';
function Input ({label,id,type = "text",placeholder,required=false,variant="",value,onChange,errorText=""}){
    return(
    <div className={`common-input ${variant}`}>
        <label htmlFor={id} className={`label-${variant}`} >{label} </label> <br/>
        <input 
          type={type} 
          id={id} 
          value={value}
          onChange={onChange}
          required={required} 
          placeholder={placeholder}/>
        <p className={`show-error error-${variant}`}>{errorText}</p>
    </div>
        
        

    )
}
export default Input;