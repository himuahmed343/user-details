import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'


const User = (props) => {
    const {name, email, salary} = props.user;
    const eventHandle = props.eventHandle
    // console.log(props.user)
    return (
        <div className="user-box">
            <p>This is <b>{name}</b></p>
            <p>Email: {email}</p>
            <p>Salary: {salary}</p>
            <button className= 'main-btn' onClick = {() => eventHandle(props.user)}>Add<FontAwesomeIcon className = 'plus-icon' icon={faPlusSquare} /></button>
        </div>
    );
};

export default User;