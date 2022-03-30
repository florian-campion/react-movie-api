import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

const Accueil = () => {
    let {pageNumber} = useParams();

    // let [datas, setDatas] = useState([]);
    // let url = useParams();
    // let [maxPage, setPageMax] = useState(1);
    let [APIDatas, setAPIDatas] = useState([])
    // let [is404, set404] = useState(false)

    useEffect(
        () => {
            fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=ae1c21d7ad5a65a54196ef103c882c14&language=en-US&page=1')
            .then(response => {
                if (!response.ok) {
                    // set404(true);
                    return;
                }
                return response.json()
            })
            .then(APIResult => {
                setAPIDatas(APIResult.results)
                // setPageMax(APIResult.info.pages)
            })
            // .catch(err => set404(true));
    }, [pageNumber]
    )
    // console.log(APIDatas);
    // if (isNaN(pageNumber) || is404)
    //     return (<h1>404</h1>)

    return (
        <Fragment>
            
            <h1>Accueil</h1>
                {
                    !APIDatas.length ?
                    <p>Loading...</p>
                :
                    APIDatas.map(
                        item => 
                            <Movie movieDatas={item} key={item.id} />
                    )
                }
                {/* {
                    
                        <Grid datas={datas}/>
                } */}
            
        </Fragment>
    )
}

export default Accueil;