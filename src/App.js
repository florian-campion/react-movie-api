import { useEffect } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Movie from './components/Movie';
import NavBar from './components/NavBar';
import FavoriteContext from './FavoriteContext';
import viewContext from './viewContext';
import Accueil from './pages/Accueil';
import Favoris from './pages/Favoris';
import Recherche from './pages/Recherche';
import Views from './pages/Views';


function App() {

  let [favs, setFavs] = useState([]);
  let [voir, setVoir] = useState([]);

  useEffect(
    () => {
      if (localStorage) {
        let Movies = localStorage.getItem('myfav');
        if (Movies && Movies.length) {
            Movies = JSON.parse(Movies);
        } else {
            Movies = [];
        }
        setFavs(Movies);
      }
    

      if (localStorage) {
        let sees = localStorage.getItem('voir');
        if (sees && sees.length) {
          sees = JSON.parse(sees);
        } else {
          sees = [];
        }
        setVoir(sees);
      }
    }, 
    [],
    []
  )

  

  const register = (Movie) => {
    if (localStorage) {
      let add = true;
      let Movies = localStorage.getItem('myfav');
      if (Movies && Movies.length) {
        Movies = JSON.parse(Movies);
      } else {
        Movies = [];
      }
      Movies = Movies.filter(
        (item) => {
          if (item.id === Movie.id) {
            add = false;
            return false;
          } else {
            return true;
          }
        }
      )
      if (add) {
        Movies.push(Movie);
      }
      setFavs(Movies);
      let MoviesStorage = JSON.stringify(Movies);
      localStorage.setItem('myfav', MoviesStorage);
    }
  }

  

  const toSee = (See) => {
    if (localStorage) {
      let add = true;
      let Sees = localStorage.getItem('voir');
      if (Sees && Sees.length) {
        Sees = JSON.parse(Sees);
      } else {
        Sees = [];
      }
      console.log(Sees)
      Sees = Sees.filter(
        (item) => {
          if (item.id === See.id) {
            add = false;
            return false;
          } else {
            return true;
          }
        }
      )
      if (add) {
        Sees.push(See);
      }
      setVoir(Sees);
      let SeeStorage = JSON.stringify(Sees);
      localStorage.setItem('voir', SeeStorage);
    }

  }

  return (
    <div className="App">
      <FavoriteContext.Provider value={ {favs, register} }>
      <viewContext.Provider value={ {voir, toSee} }>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Accueil/> } />
        <Route path="/rechercher" element={ <Recherche/> } />
        <Route path="/favoris" element={ <Favoris /> } />
        <Route path="/towatch" element={ <Views /> } />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      </viewContext.Provider>
      </FavoriteContext.Provider>
    </div>
  );
}


export default App;
