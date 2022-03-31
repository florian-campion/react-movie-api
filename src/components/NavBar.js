import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../FavoriteContext";
import viewContext from "../viewContext";
// import viewContext from "../viewContext";
import './NavBar.css'

const NavBar = () => {
    
    const favContext = useContext(FavoriteContext);
    const voirContext = useContext(viewContext);

    const linkList = [
        ['/', 'Home'],
        ['/favoris', 'Favoris ('+favContext.favs.length+')'],
        ['/towatch', 'A Voir ('+voirContext.voir.length+')'],
        ['/rechercher', 'Recherche'],
    ]
    
    return (
        <nav className="mainNav">
            <div>
                {
                    linkList.map(
                        ([url, titre], index) => <Link key={index} to={url}>{titre}</Link>
                    )
                }
            </div>
        </nav>
    )
}

export default NavBar;