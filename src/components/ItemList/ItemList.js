import Item from "../Item/Item";

function ItemList(items) {
    console.log(items);
    let is_ok = true;
    let mock = (timeout, task) => {
        return new Promise((resolve, reject) => {
            if (is_ok) {
                setTimeout(() => {
                    resolve(task);
                },timeout);
            } else {
                reject("Error al cargar productos")
            }
        }
        )
    };
    return (
        <div>
            {items.map(item => <Item key={item.id} item={item} />)}
        </div>
    )
}

export default ItemList;