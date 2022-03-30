import { Link } from "react-router-dom";

const Perso = (props) => {
    let {image, name, gender, id} = props.datas
    return (
        <article>
            <img src={image} />
            <div>
                <h2>{name}</h2>
                <small>{gender}</small>
                <Link to={"/perso/"+id}>Voir +</Link>
            </div>
        </article>
    )
}

export default Perso;