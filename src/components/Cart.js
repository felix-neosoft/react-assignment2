import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { sum:0 }
    }




    render() { 
        let arr = JSON.parse(localStorage.getItem('cart'))
        let sum = 0
        arr.forEach(element => {
            sum = sum + element.price;
        });
        return ( 
            <div>
                <table className="table table-cart">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Product Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((latest,index)=>(
                            <tr key={index}>
                                <td>{latest.id}</td>
                                <td>{latest.name}</td>
                                <td>{latest.quantity}</td>
                                <td>{latest.price}</td>
                            </tr>
                        ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Total Price : </td>
                                <td>{sum}</td>
                            </tr>
                        </tfoot>
                </table>
            </div>
         );
    }
}
 
export default Cart;