import { useContext } from "react";
import Grid from "../components/Grid";
import Movie from "../components/Movie"
import FavoriteContext from "../FavoriteContext";

const Favoris = () => {
    let { favs } = useContext(FavoriteContext);

    return (
        <div>
            <h1>Mes Favoris</h1>
            <Grid>
                {
                    favs.map( item => <Movie key={item.id} persoDatas={item} />)
                }
            </Grid>
        </div>
    )
}

export default Favoris;