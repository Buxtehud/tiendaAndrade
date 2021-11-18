import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import {data} from '../../products';

function ItemListContainer() {

    let is_ok = true;

    let mock = (timeout, task) => {
        return new Promise((resolve, reject) => {
            if (is_ok) {
                setTimeout(() => {
                    resolve(task);
                }, timeout);
            } else {
                reject("Error al cargar productos")
            }
        })
    };

    return (
        <>
            <ItemCount initial={1} stock={5} />
            {mock(2000, <ItemList items={data} />).then(result => { console.log(result) }).catch(err => console.log(err))};
        </>
    )

}

export default ItemListContainer;