import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import {data} from '../../products';
import { useEffect, useState } from "react";

function ItemListContainer() {

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

    return (
        <>
            <ItemList items = {datos} />
        </>
    )
}

export default ItemListContainer;