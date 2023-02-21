import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Container, Navbar } from 'react-bootstrap';
import './App.css';
import Brand from './component/Brand';
import ItemList from './component/ItemList';

const App = () => {

  return (
    <>
    <Navbar bg="dark" expand="sm" variant="dark">
      <Container>
        <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">store</Nav.Link>
            <Nav.Link href="#about">about</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    <Brand />
    <ItemList />
    </>

  )
}

export default App;
