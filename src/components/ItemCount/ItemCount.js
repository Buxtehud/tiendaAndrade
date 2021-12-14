import {useState} from "react";

function ItemCount({initial,stock,onAdd}){
    const init = initial;
    let [quantity,setQuantity] = useState(init);

    const add = () => {
        if(stock > quantity) setQuantity(quantity + 1);
    };

    const remove = () => {
        if(quantity > 0) setQuantity(quantity - 1);
    };
    
    return(
        <div className="container box-border h-38 w-40 p-3 space-y-2 border-blue-600 border-2 flex flex-col">
            <p className = "text-center">Producto</p>
            <div className = "flex justify-between border-gray-200 border-2">
                <button className = "m-2" onClick={add}>+</button>
                <p className = "m-2">{quantity}</p>
                <button className = "m-2" onClick={remove}>-</button>
            </div>
            <button className = "border-indigo-300 border-2 text-sm" onClick={()=>{onAdd(quantity)}}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;