import React from "react";
import '../css/style.css';
// import Iframe from 'react-iframe'
class Sketch_examples extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        console.warn(this.props.imageex)
        console.warn(this.props.imagege)
        const download = e => {
            console.log(e.target.href);
            fetch(e.target.href, {
                method: "GET",
                headers: {}
            })
                .then(response => {
                    response.arrayBuffer().then(function (buffer) {
                        const url = window.URL.createObjectURL(new Blob([buffer]));
                        const link = document.createElement("a");
                        link.href = url;
                        link.setAttribute("download", "image.html"); //or any other extension
                        document.body.appendChild(link);
                        link.click();
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        };
        return (
            <div className="body">
                <div className="navbar">
                    <div className="icon">
                        <h2 className="logo">WebGen</h2>
                    </div>
                    <a className="btn_sketch_page" href="/Home">Home</a>
                </div>
                <div className="sketch_page_title">
                    <h1>Image2Code</h1>
                    <br />
                </div>
                <div className="skpachim_container">
                    <div className="imuser"><img src={this.props.imageex}></img></div>
                    <div className="result_skgen"><iframe src={this.props.imagege}></iframe></div>
                </div>
                <div className="btns_skpachim">
                    <a href={this.props.imagege} download ><button className="download-btn" name="btdow" type="submit" >Download Code HTML</button></a>
                    <a className="aaa" href="/Sketch_page">Try a new design</a>
                </div>
            </div>
        );
    }
}

export default Sketch_examples;