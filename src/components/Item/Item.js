import "./Item.css"
import { Link } from "react-router-dom"
const Item = ({ id, name, img, stock,price}) => {
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className=" ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="itemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">Stock disponible {stock}
                </p>
            </section>
            <footer className="itemFooter">
                <Link to={`/item/${id}`} className="Option"> Ver detalle</Link>
            </footer>
        </article>
    )
}
export default Item