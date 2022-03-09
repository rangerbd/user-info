import React from 'react';
import './User.css';

const User = (props) => {

    const {username , name, email ,image} =props.user;
    const clickhandle =props.clickhandle;
    return (
        <div className='design'>
            <h4> Username : {username} </h4>
            <h5> Name: {name}</h5>
            <h5>Email : {email}</h5>
            <button onClick={()=>clickhandle(props.user)}>Click to Add</button>
            <img src={image}></img>
            <br/>
            
        </div>
    );
};

export default User;