import { useContext } from "react";
import Grid from "../components/Grid";
import Movie from "../components/Movie"
import viewContext from "../viewContext";


const Views = () => {
    let { voir } = useContext(viewContext);

    return(
        <div>
            <h1>Ma liste</h1>
            <Grid>
                {
                    voir.map( film => <Movie key={film.id} movieDatas={film} />)
                }
            </Grid>
        </div>
    )
}

export default Views;