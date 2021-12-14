import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Cart (){
    const context = useContext(CartContext);
    console.log(context);
    return(
        <>
        {
        context.cartList.length > 0
        ?<div>
            <div className="p-2 text-center">
                <button className="my-6 mx-auto border-black border rounded-md px-2" onClick={context.clear}>Vaciar Carrito</button>
            </div>
            <table className="m-auto">
            <tr>
                <th className="m-4 p-3">Producto</th>
                <th className="m-4 p-3"></th>
                <th className="m-4 p-3">Cantidad</th>
                <th className="m-4 p-3">Precio</th>
                <th className="m-4 p-3"></th>
            </tr>
            {context.cartList.map(elem => 
                <tr>
                    <td className="w-40 m-4 p-3"><img src={elem.imgItem} alt={elem.titleItem}></img></td>
                    <td className="m-4 p-3">{elem.titleItem}</td>
                    <td className="m-4 p-3 text-center">{elem.qtyItem}</td>
                    <td className="m-4 p-3 text-center">USD {elem.qtyItem*elem.priceItem}</td>
                    <td className="m-4 p-3 text-center"><button className="border-black border rounded-full px-1 text-red-500 font-medium" onClick={()=>{context.removeItem(elem.idItem)}}>X</button></td>
                </tr>
            )}
            </table>
        </div>
        :<div>
            <p className="text-center text-2xl">No hay productos en el carrito</p>
        </div>}
        </>
    )
}

export default Cart;