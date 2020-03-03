import React from 'react';

export default function FavoritesUsers(props) {
    const UserClicked=()=>{
        props.sendIdToDel(props.user);
            }
    return (
        <a onClick={UserClicked} className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{props.user.Name}</h5>
          <small>{props.user.Age}</small>
        </div>
        <p className="mb-1">Height:{props.user.Height}<br /> City:{props.user.City}
                {props.user.Premium? <p>hobbies: {props.user.Hobbies.join(" , ")}</p> : ""}</p>
      </a>
    
    );
}
