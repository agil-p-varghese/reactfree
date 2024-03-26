import React,{ Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {

    constructor(props){

       // console.log("constructor-shopping cart");
        super(props);
        this.state={
            products:[
                
        ],
        };
    }
        
        render(){

            console.log("reindr shopping cart");
            return(
                <div className="container-fluid">
                    <h4>Shopping Cart</h4>
                    <div className="row">
                        {this.state.products.map((prod)=>{
                         return<Product 
                        key={prod.id} 
                         product={prod}
                         onIncreament={this.handleIncreament}
                         onDecreament={this.handleDecreament}
                         onDelete={this.handleDelete}
                         >
                            
                            <button className="btn btn-primary">BUY NOW</button>
                         </Product>;   
                        })}
                    </div>
                </div>
            );
        }
        //rendre ends

        /*componentDidMount=async()=>{

            //console.log("comp DidMount")

            var response = await fetch{"http://localhost:5000/products",{method:"GET"}};

            var prods=await response.json();
            
            console.log(prods);
            this.setState({products:prods});

        }*/


        componentDidMount = async () => {
            //send request to server
            var response = await fetch("http://localhost:5000/products", {
              method: "GET",
            });
        
            //the following code executes after receiving response from server
            //converting the response body into a JS object array
            var prods = await response.json();
        
            //the following code executes after converting response body into JS object array
            console.log(prods);
        
            //updating products into component's state
            this.setState({ products: prods });
        
            //console.log("componentDidMount - ShoppingCart");
          };
        componentDidUpdate(prevProps,prevState){
            //console.log("shopping caert -componentDidUpdate",prevProps,prevState,this.props,this.state);
        }
        componentWillUnmount(){
            //console.log("shopping caert-componentWillUnmount(")
        }

        componentDidCatch(error,info){
            //console.log("componentDidCatch-shoppingcart");
            console.log(error,info);

            localStorage.lastError=`${error}\n${JSON.stringify(info)}}`;
        }

        

        handleIncreament=(product,maxValue)=>{
            //console.log("handleIncreament",product);
            let allProducts=[...this.state.products];
            let index = allProducts.indexOf(product);
            console.log(allProducts[index]);
            if(allProducts[index].quantity < maxValue){
                allProducts[index].quantity++;

            this.setState({products:allProducts});
            }
            
        };
        handleDecreament=(product,minValue)=>{
            //console.log("handleDecreament",product);
            let allProducts=[...this.state.products];
            let index = allProducts.indexOf(product);
            console.log(allProducts[index]);
            if(allProducts[index].quantity > minValue){
                allProducts[index].quantity--;

            this.setState({products:allProducts});
            }
            
        };

        handleDelete=(product)=>{
            let allProducts=[...this.state.products];
            let index=allProducts.indexOf(product);

            if(window.confirm("are u sure to dellete")){
                allProducts.splice(index,1);
            }
            
            this.setState({products:allProducts});
        }
}
