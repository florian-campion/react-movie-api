import { Link, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import ContentList from './components/ContentList';
import Personnage from './pages/Personnage';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>Rick & Morty</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav"/>
          <Navbar.Collapse id="main-nav"  className="justify-content-end">
            <Nav>
              <Nav.Link>
                <Link to="/">Accueil</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={ <Accueil/> } />
        <Route path="/:num" element={ <Accueil/> } />
        <Route path="/perso/:id" element={ <Personnage /> } />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <footer>
        Super site
      </footer>
    </div>
  );
}

const CustomLink = (props) => {
  return <a href={props.to}>

  </a>
}

export default App;
