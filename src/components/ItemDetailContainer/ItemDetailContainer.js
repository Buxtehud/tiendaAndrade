import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import firestoreFetch from '../../utils/firestoreFetch';

function ItemDetailContainer(){

    const [datos,setDatos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        firestoreFetch().then(answ => {
            let element = answ.find(item => item.id === id);
            setDatos(element);
        }).catch(err => console.log(err));
    },[datos]);

    return(
        <ItemDetail item={datos}/>
    )
}

export default ItemDetailContainer;