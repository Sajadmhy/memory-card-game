function Card(props) {
    return (
        <div>
            <img src={props.src}/>
            <br/>
            <p>{props.caption}</p>
        </div>
    )
}

export default Card;