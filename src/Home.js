import React, { Component } from 'react';
import { Link,Router } from 'react-router-dom';

import {Navbar,Nav,NavDropdown,Container,Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

class Home extends Component {
    constructor(props) {
    super(props);
    }

    
 
  

  
  render(){
        return (
    
    <div className="App">

          
      
      <Container className='mb-5'>
        <Row>
          {this.props.card}
        </Row>
      </Container>
    </div>
  
  );
  }

}

export default Home;