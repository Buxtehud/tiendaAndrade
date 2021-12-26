import "./AddToCartModal.css"

function AddToCartModal({ammount,mod,modalHandler}) {
    return (
        <div className="w-screen h-screen left-0 top-0 bgOpaque flex items-center justify-center z-10 fixed">
            <div className="bg-white opacity-100 border-2 border-shopSecond p-5 flex flex-col items-center justify-center">
                <p className="text-black opacity-100 p-8">Ha añadido {ammount} {ammount===1?"producto":"productos"} al carrito.</p>
                <button className="border-2 border-shopSecond rounded px-3" onClick={() => modalHandler(mod)}>Aceptar</button>
            </div>
        </div>
    )
}

export default AddToCartModal;