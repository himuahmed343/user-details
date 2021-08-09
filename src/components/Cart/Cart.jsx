import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalSalary = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const user = cart[i];
    //     totalSalary = totalSalary + user.salary
        
    // }

    const totalSalary = cart.reduce( (sum, user) => sum + user.salary, 0)

    let totalFriend = [];
    for (let i = 0; i < cart.length; i++) {
        const user = cart[i];
        totalFriend = user.name;  
        
    }
    return (
        <div>
            <h3>Total added:{cart.length}</h3>
            <p>Total salary: <b>{totalSalary}</b></p>
            <p>You're just add now <b>{totalFriend}</b></p>
        </div>
    );
};

export default Cart;