import { useEffect } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Movie from './components/Movie';
import NavBar from './components/NavBar';
import FavoriteContext from './FavoriteContext';
import Accueil from './pages/Accueil';
import Favoris from './pages/Favoris';
import Recherche from './pages/Recherche';
import Views from './pages/Views';


function App() {

  let [favs, setFavs] = useState([]);

  useEffect(
    () => {
      if (localStorage) {
        let Movie = localStorage.getItem('myfav');
        if (Movie && Movie.length) {
            Movie = JSON.parse(Movie);
        } else {
            Movie = [];
        }
        setFavs(Movie);
      }
    }, []
  )

  const register = (perso) => {
    if (localStorage) {
      let add = true;
      let persos = localStorage.getItem('myfav');
      if (persos && persos.length) {
        persos = JSON.parse(persos);
      } else {
        persos = [];
      }
      persos = persos.filter(
        (item) => {
          if (item.id === perso.id) {
            add = false;
            return false;
          } else {
            return true;
          }
        }
      )
      if (add) {
        persos.push(perso);
      }
      setFavs(persos);
      let persosStorage = JSON.stringify(persos);
      localStorage.setItem('myfav', persosStorage);
    }
  }


  return (
    <div className="App">
      <FavoriteContext.Provider value={ {favs, register} }>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Accueil/> } />
        <Route path="/search" element={ <Recherche/> } />
        <Route path="/favoris" element={ <Favoris /> } />
        <Route path="/towatch" element={ <Views /> } />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <footer>
        Super site
      </footer>
      </FavoriteContext.Provider>
    </div>
  );
}


export default App;
