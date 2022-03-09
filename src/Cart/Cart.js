import React from 'react';

const Cart = (props) => {

    const cart = props.cart;
    let totalSalary= 0 ;

    for (let i = 0; i < cart.length; i++) {
        const useri = cart[i];

        totalSalary = totalSalary + useri.salary;


        
    }
    return (
        <div>
            <h4> total Salary :{totalSalary} </h4>
        </div>
    );
};

export default Cart;