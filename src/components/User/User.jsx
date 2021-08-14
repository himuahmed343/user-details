import React, {useState} from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';



const User = (props) => {
    const {name, email, salary, phone} = props.user;
    const eventHandle = props.eventHandle;
    const [mobile, setMobile] = useState('');


    const showPhone = () => setMobile(phone);
    // console.log(props.user)
    return (
        <div className="user-box">
            <p>This is <b>{name}</b></p>
            <p>Email: {email}</p>
            <p>Salary: {salary}</p>
            <p>Phone: {mobile}</p>
            <button className= 'main-btn' onClick = {() => eventHandle(props.user)}>Add<FontAwesomeIcon className = 'plus-icon' icon={faPlusSquare} /></button>
            <button className= 'main-btn' onClick={showPhone}>Show Phone Number</button>
            
        </div>
    );
};

export default User;