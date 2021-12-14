import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({item}) {

    const {title,stock,price,pictureUrl} = item;
    const [counter,setCounter] = useState(0);
    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setCounter(qty);
    };
    
    return (
        <div className="container box-border h-38 w-40 p-3 space-y-2 border-blue-600 border-2 flex flex-col m-4">
            <p className = "text-center">{title}</p>
            <div className = "flex flex-col justify-center items-center border-gray-200 border-2">
            <img src={pictureUrl} alt={title}></img>
            <p className = "m-2">$ {price}</p>
            </div>
            {counter === 0
            ?<ItemCount initial={counter} stock={stock} onAdd={onAdd}/>
            :<Link to='/cart'>
                <div className="container h-38 w-30 space-y-2 flex flex-col">
                    <button className = "border-indigo-300 border-2 text-sm">Finalizar Compra</button>
                </div>
            </Link>}
        </div>
    )
}

export default ItemDetail;