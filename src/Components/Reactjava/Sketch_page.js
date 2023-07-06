import React from "react";
import '../css/style.css';
class Sketch_page extends React.Component {
    render() {
        return (
            <div className="body">
                    <div className="navbar">
                        <div className="icon">
                            <h2 className="logo">WebGen</h2>
                        </div>
                        <a className="btn_sketch_page " href="/Home">Home</a>
                    </div>
                    <br/>
                    <br/>

                    <div className="sketch_page_title">
                        <h1>Image2Code</h1>
                        <br/>
                        <p>
                        Transform any hand-drawn design into a HTML code with AI.
                        </p>
                        <br/>

                        <h5>
                        Choose a sample from the gallery or upload your own design or<h5 className="d11"> DRAW</h5>
                        </h5>
                    </div>
                    <div className="sketch_page_ex">
                            <button className="skpaex1"  onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/Sketch_example1';
                            
                        }}  ></button>
                            <button className="skpaex2" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/Sketch_example2';
                        }}></button>
                            <button className="skpaex3" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/Sketch_example3';
                        }}></button>
                            <button className="skpaex4" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/Sketch_example4';
                        }}></button>
                    </div>
                    <div className="skpachoose">
                        <a href='/Sketch_upload_image'>Upload a picture</a>
                        <a href = '/Take_Picture'>Take a picture</a>
                        <a href = '/Drawing_page'>Draw</a>
                    </div>
            </div>
        );
    }
}

export default Sketch_page;