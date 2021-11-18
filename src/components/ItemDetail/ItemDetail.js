function ItemDetail({item}) {
    return (
        <>
        <h1>{item.title}</h1>
        <div>
            <img src={item.pictureUrl} alt={item.title}></img>
        </div>
        <p>{item.price}</p>
        </>
    )
}

export default ItemDetail;