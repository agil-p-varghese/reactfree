import React,{Component} from "react";
import NavBar from "./NavBar";
import Login from "./login";
import ShoppingCart from "./ShoppingCart";
import Dashboard from "./Dashboard";
import CustomersList from "./CustomersList";
import { Route,Router,Routes } from "react-router";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";


export default class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <NavBar/>
               
               <Routes>
                <Route path="/" exact Component={Login}/>  
                <Route path="/dashboard" exact Component={Dashboard}/>  
                <Route path="/customerslist" exact Component={CustomersList}/>  
                <Route path="/cart" exact Component={ShoppingCart}/>  
                <Route path="*" Component={NoMatchPage}/>  
                </Routes>
              
                
            </BrowserRouter>
        );
    }
    
}
