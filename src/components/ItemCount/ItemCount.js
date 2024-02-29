import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) =>{
    const[quantity, setQuantity] = useState(initial)

    const increment=() => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    const decrement =() =>{
        if (quantity > 1){
            setQuantity(quantity - 1)
        }
    }
    return(
        <div>
            <div>
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)} disable={!stock}> Agregar al carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount
