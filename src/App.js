import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Forecast from './Forecast/Forecast';
import HomeForecast from './Forecast/HomeForecast';
import Astronomy from './Forecast/Astronomy';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="sm">
        <Container>
          <Navbar.Brand href="/">Weather</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className='navBarLink' to="forecast">Forecast</Link>
              <Link className='navBarLink' to="astronomy">Astronomy</Link>
              {/* <Nav.Link href="#home">Forecast</Nav.Link>
              <Nav.Link href="#link">Historical</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className="App-header">
        <Routes>
            <Route path="/" element={<HomeForecast></HomeForecast>}></Route>
            <Route path="Forecast" element={<Forecast></Forecast>}></Route>
            <Route path="Astronomy" element={<Astronomy></Astronomy>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;