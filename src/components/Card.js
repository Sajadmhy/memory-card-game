function Card(props) {
    return (
        <div>
            <img height={200} width={200} src={props.src} alt={props.caption}/>
            <p>{props.caption}</p>
        </div>
    )
}

export default Card;