import {useState} from "react";

function ItemCount(props){
    const init = props.initial;
    let [quantity,setQuantity] = useState(init);

    const add = () => {
        if(props.stock > quantity) setQuantity(quantity + 1);
    };

    const remove = () => {
        if(quantity > 0) setQuantity(quantity - 1);
    };
    
    return(
        <div className="container h-38 w-30 space-y-2 flex flex-col">
            <div className = "flex justify-between border-gray-200">
                <button onClick={add}>+</button>
                <p>{quantity}</p>
                <button onClick={remove}>-</button>
            </div>
            <button className = "border-indigo-300 border-2 text-sm" onClick = {props.onAdd}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;