import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import im from "../imagesproject/backimage.jpg"

class Header extends React.Component {
    render() {

        return (
            <div className="main">
                <div className="navbar">
                    <h2 className="logo">WebGen</h2>

                    <ul className="nn">
                        <li><a href="#">Home</a></li>
                        <li><a href="step">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Contact</a></li>

                    </ul>

                </div>
                <div className="wrapper">
                <div className="contentt">
                    <h1>Web Generator by<br /><span>Photo & Text</span><br />AI Models</h1>
                    <p >Creative design process begins with collaboration on a whiteboard where designers share ideas <br />Once a design is drawn, it is usually manually translated into a working HTML wireframe <br />This takes time and delays the design process. </p>
                    <button ><a href="#">READ MORE</a></button>

                </div>
                <div className="shapee">
                    <button className="btn1" onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/Sketch_page';
                    }}>Image2Code</button>
                    <button className="btn3" onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/Grapes';
                    }}>Builder</button>
                    <button className="btn2" onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/Text_page';
                    }}>Text2Code</button>
                </div>
                </div>
            </div>
        );
    }

}
export default Header;

