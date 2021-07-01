const PokeItem = ({ name, imgUrl }) => {
    return (
        <div>
            <h5>{name}</h5>
            <img src={imgUrl} alt={name} width={200} height={200} />
        </div>
    )
    
}

export default PokeItem;