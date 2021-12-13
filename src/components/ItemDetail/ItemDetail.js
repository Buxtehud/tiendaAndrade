import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({item}) {

    const {title,price,pictureUrl} = item;
    
    return (
        <div className="container box-border h-38 w-40 p-3 space-y-2 border-blue-600 border-2 flex flex-col m-4">
            <p className = "text-center">{title}</p>
            <div className = "flex flex-col justify-center items-center border-gray-200 border-2">
            <img src={pictureUrl} alt={title}></img>
            <p className = "m-2">$ {price}</p>
            </div>
            <ItemCount />
        </div>
    )
}

export default ItemDetail;