function ItemCount({stock,initial="1",onAdd}){
    
    return(
        <div className="container box-border h-38 w-40 p-3 space-y-2 border-blue-600 border-2 flex flex-col">
            <p className = "text-center">Producto</p>
            <div className = "flex justify-between border-gray-200 border-2">
                <button className = "m-2">+</button><p className = "m-2">{initial}</p><button className = "m-2">-</button>
            </div>
            <button className = "border-indigo-300 border-2 text-sm">Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;