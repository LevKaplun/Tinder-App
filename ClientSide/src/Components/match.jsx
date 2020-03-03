import React, { Component } from 'react';
import User from '../Classes/User';
import UserCard from './UserCard';
import FavoritesUsers from './FavoritesUsers';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class match extends Component {
    constructor(props) {
        super(props);
        let local = true;
        this.apiUrl = 'http://localhost:51005/api/user';
        if (!local) {
            this.apiUrl = 'http://proj.ruppin.ac.il/igroup9/test1/api/user';
        }
        this.state = {
            idToShow: 0,
            likedUsers: [],
            users: []

        }
    }
    FetchGetUsers = (isF) => {
        fetch(this.apiUrl + "/" + isF, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
            })
        })
            .then(res => {
                return res.json()
            })
            .then(
                (result) => {
                    
                    if (isF == "true") {
                        this.setState({
                            likedUsers: result.filter(user => user.Age >= this.props.location.state.Obj.min && user.Age <= this.props.location.state.Obj.max && user.Gender == this.props.location.state.Obj.g)
                        })
                    }
                    else {
                        this.setState({
                            users: result.filter(user => user.Age >= this.props.location.state.Obj.min && user.Age <= this.props.location.state.Obj.max && user.Gender == this.props.location.state.Obj.g)
                        })
                    }
                },
                (error) => {
                    console.log("err post=", error);
                });
    }
    FetchPostId=(id)=>{
        console.log(id);
        
        fetch(this.apiUrl, {
            method: 'POST',
            body: id,
            headers: new Headers({
              'Content-type': 'application/json; charset=UTF-8' 
            })
      
          })
            .then(res => {
              console.log('res=', res);
              return res.json()
            })
            .then(
              (result) => {
                console.log("fetch POST= ", result);
                this.FetchGetUsers("true");
              },
              (error) => {
                console.log("err post=", error);
              });
    }
    btnFetchDelete = (user) => {
        console.log(user);
        let tempUsers=this.state.users
        tempUsers.push(user)
        let tempLUsers=this.state.likedUsers
        tempLUsers=tempLUsers.filter(user1=> user1.Id!=user.Id)
        console.log(tempLUsers);
        
        this.setState({
            users: tempUsers,
            likedUsers: tempLUsers
        })
        fetch(this.apiUrl , {
          method: 'DELETE',
          body: user.Id,
          headers: new Headers({
            'Content-type': 'application/json; charset=UTF-8'
          })
    
        })
          .then(res => {
            console.log('res=', res);
            return res.json()
          })
          .then(
            (result) => {
              console.log("fetch del= ", result);
            },
            (error) => {
              console.log("err del=", error);
            });
      }
    componentWillMount = () => {
        this.FetchGetUsers("false");
        this.FetchGetUsers("true");
    }
    LikeClicked = (id) => {
        let tempLUsers=this.state.likedUsers
        tempLUsers.push(this.state.users[this.state.idToShow])        
        this.setState({
            idToShow: this.state.idToShow + 1,
            likedUsers: tempLUsers
        })
        console.log("like");
        
        this.FetchPostId(id);
        let tempUsers=this.state.users.push()
        
    }
    NextClicked = () => {
        console.log("next");

        this.setState({
            idToShow: this.state.idToShow + 1
        })
    }
    render() {
        console.log(this.state.users);

        return (<div><Link to="/filters"><Button variant="primary">Back To Filters</Button><br/><br/></Link>

              <div className="container">
            {this.state.users.length > 0 && this.state.users.length>this.state.idToShow?
                <UserCard user={this.state.users[this.state.idToShow]} sendLikeClicked={this.LikeClicked} sendNextClicked={this.NextClicked} />

                : ""}
            {this.state.likedUsers.length > 0? (<div className="list-group"><p style={{color:"white"}}>Favorites:<br/>(click to remove)</p> <br/>
                {this.state.likedUsers.map(user => <FavoritesUsers user={user} sendIdToDel={this.btnFetchDelete} />)}</div>)
                : ""}

</div>
        </div>);
    }
}

export default match;