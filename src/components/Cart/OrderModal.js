import "./OrderModal.css"

function OrderModal({ammount,mod,modalHandler,id}) {
    return (
        <div className="w-screen h-screen left-0 top-0 bgOpaque flex items-center justify-center z-10 fixed">
            <div className="bg-white opacity-100 border-2 border-shopSecond p-5 flex flex-col items-center justify-center">
                <p className="p-8">Su compra se registró con éxito.</p>
                <p className="p-8">Su número de compra es: {id}</p>
                <button className="border-2 border-shopSecond rounded px-3" onClick={() => modalHandler(mod)}>Aceptar</button>
            </div>
        </div>
    )
}

export default OrderModal;