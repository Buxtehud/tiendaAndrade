import ItemDetail from '../ItemDetail/ItemDetail';
import {data} from '../../products';
import { useEffect, useState } from "react";

function ItemDetailContainer(){

    const [datos,setDatos] = useState([]);  

    let is_ok = true;

    let mock = (timeout, task) => {
        return new Promise((resolve, reject) => {
            if (is_ok) {
                setTimeout(() => {
                    resolve(task);
                }, timeout);
            } else {
                reject("Error al cargar productos");
            }
        },[])
    };

    useEffect(() => {
        mock(2000,data).then(result => setDatos(result)).catch(err => console.log(err))
    },[])

    return(
        <ItemDetail item={data[0]}/>
    )
}

export default ItemDetailContainer;