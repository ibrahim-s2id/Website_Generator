import React from "react";
import axios from 'axios';
import GridLoader from "react-spinners/GridLoader";
// import {  CSSProperties } from "react";
import Backdrop from '@mui/material/Backdrop';
import '../css/style.css';

class Text_write_page extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true,
            text: '',
            loading: false,
            stdownload: false,
            html: '',

        }
    }
    submittt() {
        this.setState({ loading: true });
        console.log(this.state.text);
        const data = new FormData()
        data.append('text', this.state.text)
        let url = " http://192.168.43.110:5000/text2code";
        axios.post(url, data, {})
            .then(response => {
                this.setState({ loading: false });
                this.setState({ html: response.data });
                // this.setState({ file: response });
                // var fi = new File([res.data], "image.html");
                // this.setState({ dow: fi });
                let newWin = window.open('website', '_blank')
                newWin.document.write(response.data);
                this.setState({ stdownload: true });
            }, error => { alert(error) })
    }
    download(data) {
        const url = window.URL.createObjectURL(new Blob([data], { type: "application/html" }));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "fileName.html");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    };
    render() {

        return (
            <>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={this.state.loading == true}
                >
                    {/* <ClipLoader
                        color={'#D02B82'}
                        loading={this.state.loading == true}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    /> */}
                    <GridLoader color="#2a6592" />
                    {/* <ClimbingBoxLoader color="#36d7b7" /> */}
                    {/* <CircularProgress color="inherit" /> */}
                </Backdrop>
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
                            Write your design as a description to be converted to HTML code by AI.
                        </p>
                        <br />

                        <h5>
                            write here
                        </h5>
                    </div>
                    <div className="container">
                        <textarea className="text_area" placeholder="Enter discription..." onChange={(e) => this.setState({ text: (e.target.value) })} ></textarea>
                    </div>
                    <div className="btns_skpachim">
                            <button className="genrate-btn" name="btdow" type="submit" onClick={() => this.submittt()} disabled={!this.state.text} >GENERATE</button>
                            <button className="download-btn" name="btdow" type="submit" onClick={() => this.download(this.state.html)} disabled={!this.state.stdownload}>Download Code HTML</button>
                    </div>


                </div>
            </>
        );
    }
}

export default Text_write_page;