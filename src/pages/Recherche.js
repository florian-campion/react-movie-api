// import { Fragment, useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import Grid from "../components/Grid";
import './Recherche.css'
import { Fragment, useEffect, useState } from 'react';
import Movie from '../components/Movie';
import Grid from '../components/Grid';
// import Movie from '../compenents/Movie';

const SEARCH_API="https://api.themoviedb.org/3/search/movie?api_key=ae1c21d7ad5a65a54196ef103c882c14&language=en-US&query=";

const API_MOVIES = "https://api.themoviedb.org/3/discover/movie?api_key=ae1c21d7ad5a65a54196ef103c882c14&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

const Recherche =() => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect( () => { fetch(API_MOVIES)
    .then( res => res.json())
    .then(data =>{
        
        setMovies(data.results);
    });

    }, []);

    const handleOnSubmit =(e) =>{
    e.preventDefault();
    if(searchTerm){

    
    fetch(SEARCH_API+searchTerm)
        .then( res => res.json())
        .then(data =>{
        
        setMovies(data.results);
        });

        setSearchTerm("");
    }
    };
    const handleOnChange =(e) =>{
    setSearchTerm(e.target.value)
    };




    return (
        <div>
            <header>
            <form onSubmit={handleOnSubmit} > 
            <input className='rechercher' type="text" placeholder='Rechercher...' 
            value={searchTerm} onChange={handleOnChange}/>
            <input type="submit" value="Envoyer"/>


            </form>
            
            </header>
            <Grid >

            {movies.length > 0 && movies.map(movie =>
                <Movie key={movie.id} movieDatas={movie} />
                )
            }
            </Grid>
        </div>
    );


}

export default Recherche;