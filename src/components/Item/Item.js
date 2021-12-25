import "./Item.css"
import { Link } from "react-router-dom";

function Item({item}){

    const {id,title,stock,price,pictureUrl} = item;
    
    return (
        <div className="container h-60 w-40 p-3 space-y-2 flex flex-col m-4">
            <div className = "flex flex-col justify-center items-center h-20 overflow-hidden">
                <img src={pictureUrl} alt={title} height={90} width={135}></img>
            </div>
            <p className = "h-5 text-sm justify-center">{title}</p>
            <p className = "m-2 text-sm font-bold">$ {price}</p>
            <Link to = {`/item/${id}`}><p className = "border-shopSecond border-2 rounded-md text-sm text-center">Ver detalles</p></Link>
        </div>
    )
}

export default Item;