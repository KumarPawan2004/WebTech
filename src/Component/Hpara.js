import '../Css/Hpara.css';

const Hpara =(props)=>{
    return(
        <div className="paragraph">
            <h5 className='paragraph-heading'>{props.heading}</h5>
            <p className='paragraph-text'>{props.text}</p>
        </div>
    )
}
export default Hpara;