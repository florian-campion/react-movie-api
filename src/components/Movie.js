import { useContext, useEffect, useState } from 'react';
import FavoriteContext from '../FavoriteContext';
import viewContext from '../viewContext';
import './Movie.css';

const Movie = (props) => {

    let {poster_path, title, id} = props.movieDatas
    let favContext = useContext(FavoriteContext);
    let voirContext = useContext(viewContext);
    let [isView, setView] = useState('');
    let [isFav, setFav] = useState('');
    let [poster, setPoster] = useState('');

    
    
    useEffect(
            () => {
                // console.log(voirContext, favContext)
            setPoster ("https://image.tmdb.org/t/p/original" + poster_path);
            let find = false;
            for (let movieFav of favContext.favs) {
                if (movieFav.id !== id) {
                    continue; // passe au tour de boucle suivant sans executer la suite
                }
                find = true;
                setFav(' active')
                break; // met fin a la boucle
            }
            if (!find) {
                setFav('')
            }   


            let findView = false;
            
            for (let movieView of voirContext.voir) {
                if (movieView.id !== id) {
                    
                    continue; // passe au tour de boucle suivant sans executer la suite
                }
                findView = true;
                setView(' plus')
                break; // met fin a la boucle
            }
            if (!findView) {
                setView('')
            }

        },
        [favContext],
        [voirContext]
        

    )
    
    
    
    
    return (
        <article className="Movie">
            <h3>{title}</h3>
            <img src= {poster} />
            <div>
                <span onClick={() => { favContext.register(props.movieDatas) }} className={"favorite"+isFav}></span>
                <span onClick={() => { voirContext.toSee(props.movieDatas) }} className={"view"+isView}></span>
            </div>
            
        </article>
    )
}

export default Movie;