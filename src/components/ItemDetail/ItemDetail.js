import "./ItemDetail.css"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import AddToCartModal from "./AddToCartModal";

function ItemDetail({item}) {
    const {title,stock,price,pictureUrl} = item;
    const [counter,setCounter] = useState(0);
    let [modal,setModal] = useState(false);

    const context = useContext(CartContext);

    const modalHandler = (modal) =>{
        setModal(!modal);
    }

    const onAdd = (qty) => {
        modalHandler(modal)
        setCounter(qty);
        context.addItem(item,qty);
    };
    
    return (
        <div className="mx-auto w-3/4 flex flex-row">
            <div className="w-80 basisx mx-5">
                <img src={pictureUrl} alt={title}></img>
            </div>
            <div className = "flex flex-col justify-center items-center basisx mx-5">
                <h1 className = "text-center text-4xl basisy">{title}</h1>
                <p className = "text-xl basisy">$ {price}</p>
                {counter === 0
                ?<ItemCount className="basisy" initial={counter} stock={stock} onAdd={onAdd}/>
                :<Link to='/cart'>
                    <div className="basisy h-38 w-30 space-y-2 flex flex-col">
                        <button className = "border-shopSecond border-2 text-base">Finalizar Compra</button>
                    </div>
                </Link>}
            </div>
            {
                modal
                ?<AddToCartModal ammount ={counter} mod = {modal} modalHandler={modalHandler}/>
                :<></>
            }
        </div>
    )
}

export default ItemDetail;