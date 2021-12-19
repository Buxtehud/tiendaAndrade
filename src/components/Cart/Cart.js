import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import db from "../../utils/firebaseConfig";

function Cart (){
    const context = useContext(CartContext);

    const createOrder = () => {
        let order = {};
        order.buyer = {
            name: "Albert",
            email: "albertito@gmail.com",
            phone:"123546"
        };
        order.items = context.cartList.map(item => ({
            id:item.idItem,
            title:item.titleItem,
            price:item.priceItem,
            quantity:item.qtyItem
        }));
        order.date = serverTimestamp();
        order.total = context.calcTotal();

        const orderToFirestore = async () => {
            const newOrderRef = doc(collection(db,"ordenes"));
            await setDoc(newOrderRef,order);
            return newOrderRef;
        }
        orderToFirestore().then(answ => alert(`Su orden de compra es: ${answ.id}`)).catch(err => console.log(err));

        context.cartList.forEach(async(item) => {
            const itemRef = doc(db,"productos",item.idItem);
            await updateDoc(itemRef, {
                stock: increment(-item.qtyItem)
            })
        })

        context.clear();
    }
    
    return(
        <>
        {
        context.cartList.length > 0
        ?<div>
            <div className="p-2 text-center">
                <button className="my-6 mx-auto border-black border rounded-md px-2" onClick={context.clear}>Vaciar Carrito</button>
            </div>
            <table className="m-auto">
                <thead>
                    <tr>
                        <th className="m-4 p-3">Producto</th>
                        <th className="m-4 p-3"></th>
                        <th className="m-4 p-3">Cantidad</th>
                        <th className="m-4 p-3">Precio</th>
                        <th className="m-4 p-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {context.cartList.map(elem => 
                        <tr key={elem.idItem}>
                            <td className="w-40 m-4 p-3"><img src={elem.imgItem} alt={elem.titleItem}></img></td>
                            <td className="m-4 p-3">{elem.titleItem}</td>
                            <td className="m-4 p-3 text-center">{elem.qtyItem}</td>
                            <td className="m-4 p-3 text-center">USD {elem.qtyItem*elem.priceItem}</td>
                            <td className="m-4 p-3 text-center"><button className="border-black border rounded-full px-1 text-red-500 font-medium" onClick={()=>{context.removeItem(elem.idItem)}}>X</button></td>
                        </tr>
                    )}
                </tbody>
            <tfoot>
                <tr>
                    <td className="m-4 p-3"></td>
                    <td className="m-4 p-3 text-center">TOTAL</td>
                    <td className="m-4 p-3"></td>
                    <td className="m-4 p-3 text-center">USD {context.calcTotal()}</td>
                    <td className="m-4 p-3"></td>
                </tr>
            </tfoot>
            </table>
            <div className="p-3 text-center">
                <button className="my-6 mx-auto border-black border rounded-md p-2" onClick={createOrder}>Finalizar compra</button>
            </div>
        </div>
        :<>
            <p className="text-center text-2xl m-6 p-6">No hay productos en el carrito</p>
            <Link to = '/'><p className = "text-md text-center m-6 p-6"><span className="border-black border p-2 rounded-full">Volver a la tienda</span></p></Link>
        </>}
        </>
    )
}

export default Cart;