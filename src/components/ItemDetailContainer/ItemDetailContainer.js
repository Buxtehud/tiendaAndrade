import ItemDetail from '../ItemDetail/ItemDetail';
import {data} from '../../products';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function ItemDetailContainer(){

    const [datos,setDatos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
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
        mock(2000,data.find(item => item.id === parseInt(id))).then(result => setDatos(result)).catch(err => console.log(err));
    },[datos]);

    return(
        <ItemDetail item={datos}/>
    )
}

export default ItemDetailContainer;