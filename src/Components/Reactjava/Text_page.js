import React from "react";
import '../css/style.css';

class Text_page extends React.Component {
    render() {
        return (
            <div className="body">

                <div className="navbar">
                    <div className="icon">
                        <h2 className="logo">WebGen</h2>
                    </div>
                    <a className="btn_sketch_page" href="/Home">Home</a>
                </div>
                <br />
                <br />

                <div className="sketch_page_title">
                    <h1>Text2Code</h1>
                    <br />
                    <p>
                        Transform any written text into HTML code with AI.
                    </p>
                    <br />

                    <h5>
                        Choose a way to enter the text Write or<h5 className="d11"> SPEECH</h5>
                    </h5>
                </div>
                <div className="btns_skpachim">
                        <a href="/Text_write_page"><button className="download-btn" name="btdow" type="submit" >Write</button></a>
                        <a href="/Dictaphone"><button className="download-btn" name="btdow" type="submit" >Speech</button></a>
                </div>


            </div>
        );
    }
}

export default Text_page;