import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
    
    if (!Array.isArray(products)) {
        console.error('Error: "products" no es un array:', products);
        return null; 
    }

    return (
        <div>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;