import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Grid from "../components/Grid";
import Pagination from "../components/Pagination";
import Movie from "../components/Movie";

const Recherche = () => {

    let [search, setSearch] = useSearchParams();
    let name = search.get('name')
    let page = search.get('page')
    page = (!page) ? 1 : +(page)
        
    let [movieName, setPresoName] = useState( name ? name : '' );
    let [persos, setPersos] = useState([]);
    let [pageMax, setPageMax] = useState(0);
    // liste des besoin pour faire une recherche
    // possibilitée de varier la recherche -> nom de personnage, page
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (movieName === '') {
            setSearch({})
        } else {
            setSearch({name: movieName})
        }
    }

    useEffect(
        () => {
            let url = 'https://api.themoviedb.org/3/search/multi?api_key=ae1c21d7ad5a65a54196ef103c882c14&language=en-US&page=1&include_adult=false';
            let name = search.get('name');
            let query = false;
            if (name){
                url += '?name='+name
                query = true;
            }
            let page = search.get('page');
            if (page)
                url += (!query ? '?' : '&')+'page='+page
            fetch(url)
                .then(response => response.json())
                .then(personnages => {
                    if ('info' in personnages) {
                        setPageMax(personnages.info.pages)
                    }
                    if ('results' in personnages) {
                        setPersos(personnages.results)
                    } else {
                        setPersos([])
                    }
                })
        }, [search]
    )

    return (
        <Fragment>
            <h1>Recherche</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Titre du film" onChange={(e) => setPresoName(e.target.value) } value={movieName} />
                <input type="submit" value="envoyer"/>
            </form>
            {
                (persos.length) ?
                    <Fragment>
                        <Grid>
                            { persos.map(item => <Movie key={item.id} persoDatas={item} />) }
                        </Grid>
                        <Pagination pageMax={pageMax} pageNumber={page} withSearch />
                    </Fragment>
                :
                    <p className="alert">Aucuns résultats pour votre recherche !</p>
            }

        </Fragment>
    )
}

export default Recherche;