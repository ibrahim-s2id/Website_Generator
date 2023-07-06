import React from "react";
import Header from "./Header";
import '../css/style.css';
import Step from "./step";
import axios from 'axios';
import App from "../App";
import GridLoader from "react-spinners/GridLoader";
// import {  CSSProperties } from "react";
import Backdrop from '@mui/material/Backdrop';
// import GridLoader from '@mui/material/HashLoader';

class Sketch_upload_image extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true,
            boxuploadimage: '',
            html: "",
            file: "",
            selectedFile: '',
            dow: '',
            loading: false,
            stdownload: true

        }
        this.imageHandler = this.imageHandler.bind(this);

    }
    // const [html, setHTML] = useState({__html: ""});

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ boxuploadimage: reader.result })
                this.setState({ disabled: false })
            }
        }
        reader.readAsDataURL(e.target.files[0])

        this.setState({
            selectedFile: e.target.files[0],
        })

    }
    submittt() {
        this.setState({ loading: true });
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        // console.warn(this.state.selectedFile);
        let url = " http://192.168.43.110:5000/image2code";
        axios.post(url, data, {})
            .then(response => {
                this.setState({ loading: false });
                this.setState({ html: response.data });
                this.setState({ file: response });
                // var fi = new File([res.data], "image.html");
                // this.setState({ dow: fi });
                let newWin = window.open('website', '_blank')
                newWin.document.write(response.data);
                this.setState({ stdownload: false });
            }, error => { this.setState({ loading: false }); alert(error) })



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
    handleScroll = event => {
        console.log('scrollTop: ', event.currentTarget.scrollTop);
        console.log('offsetHeight: ', event.currentTarget.offsetHeight);
    };
    render() {
        // console.warn(this.props.file);
        const { boxuploadimage } = this.state;
        const { html } = this.state;

        // const {s=__html:html};
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



                <div className="body" >

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
                        <div className="imuser"><img src={boxuploadimage} ></img></div>
                    </div>
                    <div className="btns_skpachim">
                        <label className="choose_photo_label">
                            <input type="file" className="choose_photo_input" name="image-upload" id="input" onChange={this.imageHandler} />
                            <span className="choose_photo_text">Choose a Photo</span>
                        </label>
                        <button className="genrate-btn" name="image-upload" onClick={() => this.submittt()} type="submit" disabled={this.state.disabled}>GENERATE</button>
                        <button className="download-btn" onClick={() => this.download(this.state.html)} name="image-upload" type="submit" disabled={this.state.stdownload}>Download Code HTML</button>
                    </div>



                </div></>
        );
    }
}

export default Sketch_upload_image;


{/* <div className="steee">
                    <Step />
                </div> */}