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

    return(
        <CartContext.Provider value={{cartList,addItem,removeItem,clear}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;