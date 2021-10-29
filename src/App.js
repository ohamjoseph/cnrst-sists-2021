import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import {Navbar,Nav,NavDropdown,Container,Row, Col} from 'react-bootstrap';

import Home from "./Home";

export default function App() {

  const liens=[
        {lien:"https://meet.google.com/vnb-hvhf-zgk",title:'Salle 1'},
        {lien:"https://meet.google.com/vnb-hvhf-zgk",title:'Salle 2'},
        {lien:"https://meet.google.com/vnb-hvhf-zgk",title:'Salle 3'},
        {lien:"https://meet.google.com/vnb-hvhf-zgk",title:'Salle 4'},
        {lien:"https://meet.google.com/vnb-hvhf-zgk",title:'Salle 5'},
        {lien:"https://meet.google.com/vnb-hvhf-zgk",title:'Salle 6'},
    
    
  ]

  const card = liens.map((lien,idx) => (
    <Col xs={4} md={4} className='mt-3'>
            
      <Typography gutterBottom variant="h5" component="div">
        {lien.title}
      </Typography>

      <Card className='mt-2' >
        <CardActionArea href={lien.lien}>
          
          <CardContent sx={{ height: '40vh' }}>
            
            <CardMedia
            image='https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&w=1000&q=80'/>
          </CardContent>
        </CardActionArea>
      </Card>
          
    </Col>
  ));
  
  return (
    <Router basename="/cnrst-sist-2021" >
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" >
        <Container>
          <Navbar.Brand href="#home" text={'white'}>
            <img
          alt="logo"
          src={process.env.PUBLIC_URL + "/img3.png"}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        Symposium International sur la Science et la Technologie 2021 </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>

        <img
         width="100%"
          alt="logo"
          src={process.env.PUBLIC_URL + "/bando2.jpg"}
          className="d-inline-block align-top"
        />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home card={card} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}