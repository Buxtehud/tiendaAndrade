import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

function ItemListContainer(){

    return(
    <>
        <ItemCount initial = {1} stock = {5}/>
        <ItemList items = {[{id:1,title:"Sarten",price:500,pictureUrl:""},{id:2,title:"Cuchara",price:100,pictureUrl:""}]}/>
    </>
    )

}

export default ItemListContainer;