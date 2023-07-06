import React, { useEffect, useRef, useState } from "react";
import '../css/style.css';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Step from "./step";
import axios from 'axios';
import GridLoader from "react-spinners/GridLoader";
import Backdrop from '@mui/material/Backdrop';

function Take_Picture() {



    let videoRef = useRef(null)
    let photoRef = useRef(null)
    const [html, setHtml] = useState("");
    const [file, setFile] = useState('');
    const [st, setSt] = useState(true);
    const [dt, setdt] = useState(true);
    const [wait, setwait] = useState(false);

    const getUserCamera = () => {
        navigator.mediaDevices.getUserMedia({
            video: true
        })
            .then((stream) => {
                let video = videoRef.current

                video.srcObject = stream

                video.play()

            })
            .catch((error) => { console.error(error) })
    }
    const takePicture = () => {
        let width = 500
        let height = width / (16 / 11)
        let photo = photoRef.current
        let video = videoRef.current
        photo.width = width
        photo.height = height
        let ctx = photo.getContext('2d')
        ctx.drawImage(video, 0, 0, photo.width, photo.height)
        setSt(false);

    }
    const Downlooad = () => {
        const f = file;
        const url = window.URL.createObjectURL(new Blob([f], { type: "application/html" }));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "fileName.html");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    }

    // const download = async () => {
    //     const image = photoRef.current.toDataURL('image/html');
    //     const blod = await (await fetch(image)).blob();
    //     const blodURL = URL.createObjectURL(blod);
    //     const link = document.createElement('a');
    //     link.href = blodURL;
    //     link.download = "image.html";
    // var bytestring = image;
    // const i = String(bytestring).split('\'')[1]

    // console.log(URL.createObjectURL(`data:image/jpeg;base64,${blod}`));
    // const b= ('src','data:image/jpeg;base64,'+i)
    // console.log(b)
    // var fi = new File([blod],"image.png");

    // setHtml(fi);
    // console.log(fi)
    //     link.click();
    // }
    const submittt = async () => {
        setwait(true);
        const image = photoRef.current.toDataURL('image/png');
        const blod = await (await fetch(image)).blob();
        var fi = new File([blod], "image.png");
        const data = new FormData()
        data.append('file', fi)
        let url = " http://192.168.43.110:5000/image2code";
        axios.post(url, data, {})
            .then(res => {
                if (res == "No selected file") {
                    setwait(false);
                    alert(res)
                    window.location.reload(true);
                }
                else if (res == "error send only png, jpeg or jpg") {
                    setwait(false);
                    alert(res)
                    window.location.reload(true);
                }
                else {
                    setwait(false);
                    var resfil = new File([res.data], "image.html");
                    setFile(resfil);
                    let newWin = window.open('website', '_blank')
                    newWin.document.write(res.data);
                    setHtml(res.data);
                    setdt(false)
                }
            }, error => { setwait(false); alert(error) })
    }



    useEffect(() => {
        getUserCamera()
    }, [videoRef])

    return (
        // const { html } = this.state.File;
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={wait == true}
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

                <div className="sketch_page_title">
                    <h1>Image2Code</h1>
                    <br />
                    <p>
                        Take a picture with your camera.
                    </p>
                </div>
                <div className="box_camera">
                    <video className="camera" ref={videoRef}></video>
                    <canvas className="photoscamera" ref={photoRef}></canvas>
                </div>

                <div className="btns_skpachim">
                    <button onClick={takePicture} className="btn_take_photo" >Take a photo</button>
                    <button onClick={submittt} className="genrate-btn" name="btdow" type="submit" disabled={st} >GENERATE</button>
                    <button className="download-btn" onClick={Downlooad} name="btdow" type="submit" disabled={dt} >Download Code HTML</button>
                </div>


            </div>
        </>
    );
}


export default Take_Picture;

{/* <div className="box_camera">
            

            </div>
                <div className="steee">
                    <Step />
                </div> */}