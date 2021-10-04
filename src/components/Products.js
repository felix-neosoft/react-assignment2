import {Component} from 'react';
import Data from '../products.json';
import Cart from './Cart';
import './Products.css';

class Products extends Component {
    constructor(props){
        super(props);
        this.state={products:[],cart:0,cartD:1};
    }
    componentDidMount(){
        this.setState({products:Data.products})
        if(localStorage.getItem('cart')!==undefined){
            let arr = JSON.parse(localStorage.getItem('cart',))
            this.setState({cart:arr.length})
        }
        else{
            let arr=[]
            localStorage.setItem('cart',JSON.stringify(arr))
        }
        
    }
    addCart=(index,id,pname,price,quantity)=>{
            let arr = JSON.parse(localStorage.getItem('cart',))
                let pr  = {id:id, name:pname, price: price,quantity:1}
                arr.push(pr)
                localStorage.setItem('cart',JSON.stringify(arr))
                this.setState({cart:this.state.cart+1})
    }

    displayCart=()=>{
        let dis = document.getElementById("Cart_display")
        if(this.state.cartD===0){
            dis.style.display="none"
            this.setState({cartD:1})
        }
        else{
            dis.style.display="block"
            this.setState({cartD:0})
        }
    }
    render(){
        return(
           <div className="container nav-cart">
               <nav className="navbar navbar-dark bg-primary">
                    <div className="container-fluid bg-primary">
                        <span className="navbar-brand p-3">Products</span>
                        <span id="cart-btn" className="link p-3" onClick={this.displayCart}>Cart<sup>{this.state.cart}</sup></span>
                    </div>
                </nav>
                <div id="Cart_display">
                    <Cart />
                </div>
               <div className="row">
                {this.state.products.map((latest,index) =>
                    <div key={index} className="card col-3 mt-5 me-5 ms-5 card-boxing">
                        <img src={latest.images} className="card-img-top" alt="..."/>
                        <div className="card-body card-texting">
                            <h5 className="card-title">{latest.pname}</h5>
                            <p>Price : {latest.price}</p>
                            <p>Quantity : {latest.quantity}</p>
                            <button className="btn-primary " onClick={()=>this.addCart(index,latest.id,latest.pname,latest.price,latest.quantity)}>Add To Cart</button>
                        </div>
                    </div>
                 )}

               </div>
               
                    
            </div>
        )
    }
}

export default Products


