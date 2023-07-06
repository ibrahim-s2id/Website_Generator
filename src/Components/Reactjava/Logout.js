import React from "react";
import Home from "./Home";
import Login from "./Login";
class Logout extends React.Component{
    render(){
        const result=0;
    if(localStorage.getItem("idAdmin")){
        localStorage.setItem("idAdmin",result);
        
        return(
                <Home/>
        );}
    else {
        return(
          
              <Home/>
          
          );}
    
    }
    }

export default Logout;