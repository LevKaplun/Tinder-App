import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';


class filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: "male",
            min: 0,
            max: 100
        }
    }
    GChanged = (e) => {
        this.setState({
            gender: e.target.value
        });
    }
    MintxtChanged = (e) => {
        this.setState({
            min: parseInt(e.target.value)
        })
    }
    MaxtxtChanged = (e) => {
        this.setState({
            max: parseInt(e.target.value)
        })
    }
    StartMatchClicked = () => {
        var objS = {
            min: this.state.min,
            max : this.state.max,
            g:this.state.gender
        };
        
        this.props.history.push({
            pathname: '/match',
            state: { Obj: objS }
        });
            
    }
        
    render() {
        return (
            <div>
                <Form>
                    <p className="thick">Choose partner gender:</p>
                    <input onChange={this.GChanged} checked={this.state.gender === 'male'} type="radio" name="gender" id="r1" value="male"></input> Male<br />
                    <input onChange={this.GChanged} checked={this.state.gender === 'female'} type="radio" name="gender" id="r2" value="female"></input> Female<br />

                </Form>
                <br />
                <p className="thick">Choose partner age:</p>
                <p className="thick">between</p>
                <input id="minAge" type="text" className="front" name="age" onChange={this.MintxtChanged} />
                <p className="thick">and</p>
                <input id="maxAge" type="text" className="front" name="age"onChange={this.MaxtxtChanged}  />
                <br />
                <Button onClick={this.StartMatchClicked} variant="primary">Find Macth</Button>
            </div>
        );
    }
}

export default filters;