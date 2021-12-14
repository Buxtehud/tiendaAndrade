import {useEffect, useState} from "react";

function ItemCount({initial, stock, onAdd}){
    
    let [quantity,setQuantity] = useState(initial);

    useEffect(() => {
        setQuantity(initial);
    },[]);

    const addOne = () => {
        if(stock > quantity) {
            setQuantity(quantity + 1)
        };
    };

    const removeOne = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        };
    };

    return(
        <div className="container h-38 w-30 space-y-2 flex flex-col">
            <div className = "flex justify-between border-gray-200">
                <button onClick={addOne}>+</button>
                <p>{quantity}</p>
                <button onClick={removeOne}>-</button>
            </div>
            {
                quantity !== 0
                ?<button className = "border-indigo-300 border-2 text-sm" onClick = {() => onAdd(quantity)}>Agregar al Carrito</button>
                :<button className = "border-indigo-100 border-2 text-sm text-gray-300" disabled>Agregar al Carrito</button>
            }
        </div>
    )
}

export default ItemCount;