import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Match from './match';
import Filters from './filters';
import Home from './Home';

class tinder extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/> 
                    <Route path="/filters" component={Filters}/>
                <Route path="/match" component={Match}/>
            </Switch>
            </div>
        );
    }
}
export default withRouter(tinder);;
