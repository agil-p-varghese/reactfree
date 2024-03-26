import React, {Component} from "react";
export default class Product extends Component{
    constructor(props){
        super(props);

        this.state={
            product: this.props.product,
        };

        }
    

    
    render(){
       // console.log("render-product");
        //console.log(this.props);
        return (
            <div className="col-lg-6">
        <div className="card m-1">

            <div className="card-body">
                <div className="text-muted">#{this.state.product.id}
                <span className="pull-right hand-icon"onClick={()=>{
                    this.props.onDelete(this.state.product);
                }}>
                    <i className="fa fa-times"></i>
                </span>
                </div>

                
                <h5 className="p-5 border-top">{this.state.product.productName}</h5>
                <div>${this.state.product.price}</div>
            </div>
            {/*card body ends*/}

            <div className="card-footer">
                <div className="float-left">
                    <span className="badge">
                {this.props.product.quantity}
                </span>

                <div className="btn-group">
                    <button className="btn btn-outline-success"onClick={()=>{this.props.onIncreament(this.state.product,10);}}>+</button>
                    <button className="btn btn-outline-success"onClick={()=>{this.props.onDecreament(this.state.product,0);}}>-</button>
                    
                    </div>
                    </div>
            {/*float left ends*/}

            <div className="float-right">{this.props.children}</div>
            </div>
            
            {/*card footer ends*/}

            </div>
            </div>);
    }
    componentWillUnmount(){
        //console.log("product-componentWillUnmount")
    }
    
    componentDidMount(){
        //console.log("componentDidMount-produvt");
    }
    componentDidUpdate(){
        //console.log("product-componentDidUpdate");
    }
}