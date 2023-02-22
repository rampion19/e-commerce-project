import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import {Container, Navbar} from 'react-bootstrap';
import './App.css';
import ItemList from './component/ItemList';
import CartContent from './component/Cart/CartContent';
import Brand from './component/Brand/Brand';
import CartButton from './component/Cart/CartButton';


const App = () => {

  const [cartdisplay, setcart] = useState(false);

  const cartbuttonhandler = () => {
    setcart(true);
  };
  const cartclosebuttonhandler = () => {
    setcart(false);
  };
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark" >
        <Container>
          <Nav className='text-center'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">store</Nav.Link>
            <Nav.Link href="#about">about</Nav.Link>
          </Nav>
        </Container>
        <CartButton onshowing ={cartbuttonhandler} />
      </Navbar>
     <Brand />
     {cartdisplay && <CartContent onremove={cartclosebuttonhandler}/>}
      <ItemList />
    </>

  )
}

export default App;
