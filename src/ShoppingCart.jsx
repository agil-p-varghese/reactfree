import React,{ Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
        state={
            products:[{id:1,productName:"iphone",price:8900,quantity:0},
            {id:2,productName:"sonycamera",price:4500,quantity:0},
            {id:3,productName:"samsung QLED TV",price:3100,quantity:0},
            {id:4,productName:"ipad",price:2100,quantity:0},
            {id:5,productName:"keltrin",price:9900,quantity:0},
            {id:6,productName:"dumbrl",price:7100,quantity:0}],
        };
        render(){
            return(
                <div className="container-fluid">
                    <h4>Shopping Cart</h4>
                    <div className="row">
                        {this.state.products.map((prod)=>{
                         return<Product 
                        key={prod.id} 
                         id={prod.id} 
                         productName={prod.productName} 
                         price={prod.price}/>;   
                        })}
                    </div>
                </div>
            );
        }
}
