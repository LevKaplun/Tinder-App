import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
              

            lets start      

           <br/> <Link to="/filters"><Button variant="primary">Filter</Button></Link>
        </div> );
    }
}
 
export default Home;