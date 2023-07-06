import React from "react";
import  ReactDOM from "react-dom";
import App from './Components/App.js';
import './Components/css/style.css';
import './Components/css/text2code.css';
import  Home from'./Components/Reactjava/Home';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
 <BrowserRouter>
    <App/>
 </BrowserRouter>
,document.getElementById('root'));