import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GridLoader from "react-spinners/GridLoader";
// import {  CSSProperties } from "react";
import Backdrop from '@mui/material/Backdrop';

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()
mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const Dictaphone = () => {
    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)
    const [savedNotes, setSavedNotes] = useState([])
    const [loading, setLoading] = useState(false)
    const [download, setdownload] = useState(false)

    const [file, setFile] = useState('')
    // const [isListening, setIsListening] = useState(false)

    // const [text,setText]=useState('')
    useEffect(() => {
        handleListen()
    }, [isListening])

    const handleListen = () => {
        if (isListening) {
            mic.start()
            mic.onend = () => {
                console.log('continue..')
                mic.start()
            }
        } else {
            mic.stop()
            mic.onend = () => {
                console.log('Stopped Mic on Click')
            }
        }
        mic.onstart = () => {
            console.log('Mics on')
        }

        mic.onresult = event => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
            console.log(transcript)
            setNote(transcript)
            mic.onerror = event => {
                console.log(event.error)
            }
        }
    }
    const submittt = () => {
        setLoading(true)
        console.log(savedNotes);
        const data = new FormData()
        data.append('text', savedNotes)
        let url = " http://192.168.1.220:5000/text2code";
        axios.post(url, data, {})
            .then(response => {
                // this.setState({ loading: false });
                setLoading(false)
                // this.setState({ html: response.data });

                // this.setState({ file: response });
                var resfil = new File([response.data], "image.html");
                setFile(resfil);
                let newWin = window.open('website', '_blank')
                newWin.document.write(response.data);
                // this.setState({ stdownload: true });
                setdownload(true)
            }, error => { loading(false); alert(error) })
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
    const handleSaveNote = () => {
        setSavedNotes([...savedNotes, note])
        setNote('')
    }
    const ClerSaveNote = () => {
        setSavedNotes(['', ''])

    }
    console.log("this is saved notes " + savedNotes)
    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading == true}
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
            <div className='body'>
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
                        Speak your design as a description to be converted to HTML code by AI.
                    </p>
                    <br />
                </div>
                <div className="all_box" style={{ marginTop: "-20px" }}>
                    <div className="box1">
                        <h2>Current Note</h2>
                        {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
                        <div className="btn_control_record" style={{ marginTop: "10px" }}>
                            <div className="br" style={{ marginLeft: "0px" }}>
                                <button className="" onClick={() => setIsListening(prevState => !prevState)} >Start/Stop</button>
                            </div>
                            <div className="br">
                                <button className="" onClick={handleSaveNote} disabled={!note} >Save</button>
                            </div>

                        </div>
                        <p>{note}</p>
                    </div>
                    <div className="box1">
                        <h2>Notes</h2>
                        <br />

                        <div className="brr">
                            <button className="" onClick={ClerSaveNote} disabled={savedNotes == ![]}>clear</button>
                        </div>
                        {savedNotes.map(n => (
                            <p key={n}>{n}</p>
                        ))}
                    </div>


                </div>
                <div className="btns_skpachim" >
                    <button className="genrate-btn" name="btdow" type="submit" onClick={submittt} disabled={savedNotes == ![]} >GENERATE</button>
                    <button className="download-btn" name="btdow" type="submit" disabled={savedNotes == ![]} >Download Code HTML</button>
                </div>

            </div>
        </>
    );
};
export default Dictaphone;