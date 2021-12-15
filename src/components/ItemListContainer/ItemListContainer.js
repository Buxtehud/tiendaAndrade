import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firestoreFetch from "../../utils/firestoreFetch";

function ItemListContainer() {

    const [datos,setDatos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        firestoreFetch().then(answ => setDatos(answ));
    },[id])

    return (
            <ItemList items = {datos} />
    )
}

export default ItemListContainer;