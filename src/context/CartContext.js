import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({children}){
    const [cartList,setCartList] = useState([]);

    const addItem = (item,qty) => {
        let isIn = false;
        cartList.forEach(elem => {
            if(elem.idItem === item.id){
                isIn = true;
                elem.qtyItem += qty;
                return (setCartList([...cartList]));
            }
        });
        if(!isIn || cartList.length === 0){
            return (
                setCartList([
                    ...cartList,
                    {
                        titleItem: item.title,
                        idItem: item.id,
                        imgItem: item.pictureUrl,
                        priceItem: item.price,
                        qtyItem: qty
                    }
                ])
            )
        }
    }

    const removeItem = (id) => {
        let newList = cartList.filter(item => item.idItem != id);
        setCartList(newList);
    }

    const clear = () => {
        setCartList([]);
    }

    const calcTotal = () => {
        let subtotales = cartList.map(elem => elem.qtyItem*elem.priceItem);
        let total =  subtotales.reduce((prev,next) => prev+next);
        return total;
    }

    const cantTotal = () => {
        let cantidades = [];
        let total = 0;
        if(cartList.length > 0){
        cantidades = cartList.map(elem => elem.qtyItem);
        total = cantidades.reduce((prev,next) => prev+next)
        }
        return total;
    }

    return(
        <CartContext.Provider value={{cartList,addItem,removeItem,clear,calcTotal,cantTotal}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;