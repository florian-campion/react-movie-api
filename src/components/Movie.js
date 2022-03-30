import { useContext, useEffect, useState } from 'react';
import FavoriteContext from '../FavoriteContext';
import './Movie.css';

const Movie = (props) => {

    let {poster_path, title, id} = props.movieDatas
    let favContext = useContext(FavoriteContext);
    let [isFav, setFav] = useState('');
    let [poster, setPoster] = useState('');

    
    
    useEffect(
        () => {
            let find = false;
            for (let movieFav of favContext.favs) {
                if (movieFav.id != id) {
                    continue; // passe au tour de boucle suivant sans executer la suite
                }
                find = true;
                setFav(' active')
                break; // met fin a la boucle
            }
            if (!find) {
                setFav('')
            }
        }, [favContext]
    )
    

    setPoster ("https://image.tmdb.org/t/p/original" + poster_path) 
        poster = "https://image.tmdb.org/t/p/original" + poster_path;
                
    
    
    console.log(poster)
    // console.log(poster_path)
    
    return (
        <article className="Movie">
            <img src= {poster} />
            <h3>{title}</h3>
            <span onClick={() => { favContext.register(props.movieDatas) }} className={"favorite"+isFav}></span>
        </article>
    )
}

export default Movie;