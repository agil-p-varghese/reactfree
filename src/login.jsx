import React,{Component} from "react";
export default class Login extends Component{

    constructor(props){
        super(props);

        this.state={email:"",password:"",message:""};
    }
    render(){
        return <div className="col-lg-9">

        <h4 className="m-1 p-2 border-bottom">Login</h4>

        {/*email start */}
        <div className="form-group form-row">
            <label className="col-lg-4">Email</label>
            <input type="text" className="form-control" 
            value={this.state.email} 
            onChange={(event)=>{this.setState({email:event.target.value});
            //console.log(this.state.email);
            }}></input>
        </div>
        {/*email end */}

        {/*pwd start */}


        <div className="form-group form-row">
            <label className="col-lg-4">Password</label>
            <input type="password" className="form-control"value={this.state.password}
            onChange={(event)=>{this.setState({password:event.target.value});
            //console.log(this.state.email);
            }}
            ></input>
        </div>

        {/*pwd end */}
            <div className="text-right">

                {this.state.message};
            <button className="btn btn-primary" onClick={this.onLoginClick }>Login</button>


            </div>
        </div>;
        
    }

    onLoginClick=async()=>{
        console.log(this.state);

        
        var response=await fetch(`http://localhost:5000/user?email=${this.state.email}&password=${this.state.password}`,{method:"GET"});

        var body=await response.json();
        console.log(body);
        if(body.length>0){
            //success
            this.setState({message:<span className="text-success">Successfully loged</span>})
        }
        else{
            //errror

            this.setState({message:<span className="text-danger">Inavalid loged</span>})
        }
    }
}