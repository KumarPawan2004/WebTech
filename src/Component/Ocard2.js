import '../Css/Ocard2.css';

const Ocard2 = (props)=>{
    return (
        <>
            <div className="Ocard2">
                <p className='title2'>{props.title}</p>
                <p className='text2'>{props.text}</p>
            </div>
        </>
    )
}

export default Ocard2;