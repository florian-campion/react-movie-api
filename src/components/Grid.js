import { useEffect, useState } from "react";
import './Grid.css'

const Grid = (props) => {

    let [pres, setPres] = useState('vignette');

    const presentation = (nPres) => {
        if (localStorage) {
            localStorage.setItem('rm-pres', nPres);
        }
        setPres(nPres);
    }

    useEffect(
        () => {
            if (localStorage) {
                let rPres = localStorage.getItem('rm-pres');
                if (rPres) {
                    setPres(rPres);
                }
            }
        }, []
    )

    return (
        <div className="Grid">
            <nav className="optionsNav">
                <span 
                    className={ 'btn'+( (pres == 'vignette') ? ' active' : '' ) } 
                    onClick={ () => { presentation('vignette') } }>
                        Vignette
                </span>
                <span 
                    className={ 'btn'+( (pres == 'liste') ? ' active' : '' ) } 
                    onClick={ () => { presentation('liste') } }>
                        Liste
                </span>
            </nav>
            <div className={pres} >
                { props.children }
            </div>
        </div>
    )
}

export default Grid;