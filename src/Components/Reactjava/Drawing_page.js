import React from "react";
import Header from "./Header";
import '../css/style.css';
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import Step from "./step";
import axios from 'axios';
import GridLoader from "react-spinners/GridLoader";
import Backdrop from '@mui/material/Backdrop';
// import { passBase64 } from 'ts-base64toimage';

const colors = [
    "white",
    "red",
    "green",
    "blue",
    "yellow"
]
function Drawing_page() {
    const ctx = useRef(null);
    const canvasRef = useRef(null);
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [mouseDown, setMouseDown] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [html, setHtml] = useState('');
    const [file, setFile] = useState('');
    const [stdownload, setstdownload] = useState(true);
    const [wait, setwait] = useState(false);
    const [lastPosition, setPosition] = useState({
        x: 0,
        y: 0,
    });
    useEffect(() => {
        if (canvasRef.current) {
            ctx.current = canvasRef.current.getContext('2d');
        }
    }, []);
    const draw = useCallback((x, y) => {
        if (mouseDown) {
            ctx.current.beginPath();
            ctx.current.strokeStyle = selectedColor;
            ctx.current.lineWidth = 2;
            ctx.current.lineJoin = 'round';
            ctx.current.moveTo(lastPosition.x, lastPosition.y);
            ctx.current.lineTo(x, y);
            ctx.current.closePath();
            ctx.current.stroke();

            setPosition({
                x,
                y
            })
        }
    }, [lastPosition, mouseDown, selectedColor, setPosition])
    const clear = () => {
        ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)
    }
    const download = async () => {
        const image = canvasRef.current.toDataURL('image/png');
        const blod = await (await fetch(image)).blob();
        const blodURL = URL.createObjectURL(blod);
        const link = document.createElement('a');
        link.href = blodURL;
        link.download = "image.png";
        link.click();
    }
    const submittt = async () => {
        setwait(true);
        const image = canvasRef.current.toDataURL('image/png');
        const blod = await (await fetch(image)).blob();
        var fii = new File([blod], "image1.png");
        const data = new FormData()
        data.append('file', fii)
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
                    setHtml(res.data);
                    let newWin = window.open('website', '_blank')
                    newWin.document.write(res.data);
                    setFile(res);
                    setwait(false);
                    setstdownload(false);
                }
            }, error => { setwait(false); alert(error) })
    }
    const onMouseDown = (e) => {
        setPosition({
            x: e.pageX - 10,
            y: e.pageY - 10
        })
        setMouseDown(true)
        setDisabled(false)
    }
    const onMouseUp = (e) => {
        setMouseDown(false)
    }
    const onMouseMove = (e) => {
        draw(e.pageX - 10, e.pageY - 10)
    }
    return (
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
                <div className="draw_box">
                    <canvas
                        width={1500}
                        height={500}
                        ref={canvasRef}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={onMouseUp}
                        onMouseLeave={onMouseUp}
                    />
                    <br />
                    <div style={{ marginTop: "-30px" }}>
                        <select style={{ marginRight: "50px", marginLeft:"50px"}}
                            value={selectedColor}
                            onChange={(e) => setSelectedColor(e.target.value)}
                        >
                            {
                                colors.map(
                                    color => <option key={color} value={color}>{color}</option>
                                )
                            }
                        </select>
                        <button style={{ width: "70px", height: "30px", padding: "0px", marginLeft: "20px" }} onClick={clear}>clear</button>
                    </div>
                    <div className="sketch_page_title">
                        <h1>Image2Code</h1>
                        <br />
                        <p>
                            Draw your website on top
                        </p>
                        <br />
                    </div>
                    <div className="btns_skpachim">
                            <button className="download-btn" name="btdow" type="submit" onClick={download} >Download The Figure</button>
                            <button className="genrate-btn" name="btdow" onClick={submittt} type="submit"  >GENERATE</button>
                            <button className="download-btn" name="btdow" type="submit">Download Code HTML</button>
                    </div>
                </div>

            </div>
        </>
    );
}


export default Drawing_page;


{/* <div className="steee">
<Step />
</div> */}
