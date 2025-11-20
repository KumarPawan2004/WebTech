import '../Css/O_card.css';

const Ocard1 = (props)=>{
    return (
        <>
            <div className="o_card">
                <p className='title'>{props.title}</p>
                <p className='text'>{props.text}</p>
                <div className="line"></div>
            </div>
        </>
    )
}

export default Ocard1;