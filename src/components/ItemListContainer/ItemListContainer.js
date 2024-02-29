import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory} from "../asyncMokc"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer =({greeting})=>{
    const[products, setProducts]= useState([])

    const {categoryId }= useParams()

    useEffect(()=>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {console.log("Respuesta de la llamada asincrónica:", response);
                setProducts(response)
            })
            .catch(error => {
                console.error("Error al obtener los productos:", error);
                console.error (error)
            })
    },[categoryId])

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer