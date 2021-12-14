import ItemList from "../ItemList/ItemList";
import {data} from '../../products';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {

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
        mock(2000,data.filter(item => {
            if (id === undefined) return item;
            return item.categoryId === id;
        })).then(result => setDatos(result)).catch(err => console.log(err))
    },[datos])

    return (
            <ItemList items = {datos} />
    )
}

export default ItemListContainer;