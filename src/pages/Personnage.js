import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { useParams } from "react-router-dom";

const PersoContent = (props) => {
    if (!props.status) 
        return (<h1>404</h1>)
    let {name, image, gender, status, location} = props.perso;
    return (
        <div>
            <img src={image}/>
            <h1>{name}</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Genre : </td>
                        <td>{gender}</td>
                    </tr>
                    <tr>
                        <td>Dernière position : </td>
                        <td>{location.name}</td>
                    </tr>
                    <tr>
                        <td>Situation : </td>
                        <td>{status}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const Personnage = () => {

    let { id } = useParams();
    let [perso, setPerso] = useState(false);
    let [requestStatus, updateRequestStatus] = useState(false);
    useEffect (
        () => { // Promise
            fetch('https://rickandmortyapi.com/api/character/'+id)
                .then(response => {
                    updateRequestStatus(response.ok);
                    return response.json();
                } )
                .then(perso => {
                    setPerso(perso);
                })
                .catch(err => console.warn('erreure de requete'))
        }, []
    )

    return (
        <div>
            {
                perso ?
                    <PersoContent status={requestStatus} perso={perso}/>
                : 
                    <Triangle color="blue" />
            }
            
        </div>
    )
}

export default Personnage;