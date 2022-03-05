import React  from "react";
import { Navbar, Container, Nav, NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import './header.css'
import logo from '../../assets/logo.svg';

const Header = ({handelYearSelect}) => {

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    console.log('on submit ')
  }
   return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container fluid >
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
  

   <Navbar.Brand href="#home" ><img  className ='header-logo mx-auto'  src={logo} alt='logo' /> </Navbar.Brand>  
  
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
   
    <NavDropdown title="Subject" id="collasible-nav-dropdown" >
    <NavDropdown title="SAT" id='subject-dropdown'>
        <NavDropdown.Item  onClick={handelYearSelect}>2001</NavDropdown.Item>
        <NavDropdown.Item  onClick={handelYearSelect}>2002</NavDropdown.Item>
        <NavDropdown.Item  onClick={handelYearSelect}>2003</NavDropdown.Item>
       
      </NavDropdown>
      <NavDropdown title="MATHS" id='subject-dropdown' >
        <NavDropdown.Item >2001</NavDropdown.Item>
        <NavDropdown.Item>2002</NavDropdown.Item>
        <NavDropdown.Item >2003</NavDropdown.Item>
       
      </NavDropdown>
      <NavDropdown title="PHYSICS" id='subject-dropdown'>
        <NavDropdown.Item >2001</NavDropdown.Item>
        <NavDropdown.Item >2002</NavDropdown.Item>
        <NavDropdown.Item >2003</NavDropdown.Item>
       
      </NavDropdown>
      
       
      </NavDropdown>
    </Nav>
      
     
 
    <Nav>
    <Form size="sm" className="d-flex search-bar" onSubmit={onSubmit}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          
        />
        <Button  type="submit" id='submit-btn'>Search</Button>
      </Form>
  
 
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
}

export default Header;