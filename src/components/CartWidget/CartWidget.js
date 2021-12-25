import {ShoppingCartIcon} from '@heroicons/react/outline';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CartWidget(){

    const context = useContext(CartContext);

    return(
        <div className="">
            {context.cantTotal() > 0
            ?<div className='rounded-full bg-blue-400 text-white w-5 h-5 text-center text-xs align-baseline leading-5'>{context.cantTotal()}</div>
            :<></>}
            <ShoppingCartIcon className = "h-6  w-6" />
        </div>
        
    )
}

export default CartWidget;