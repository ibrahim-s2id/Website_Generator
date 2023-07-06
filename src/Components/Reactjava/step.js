import React from "react";
import { useState } from "react";
import StepNavigation from "./stepNavigation";

function Step(props) {

    const labelArray = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
    const [currentStep, updateCurrentStep] = useState(1);

    function updateStep(s) {
        updateCurrentStep(s);
    }

    return (
        <div className="App">
            <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
            <p style={{ color: "white", paddingLeft: "20px", display: "flex", justifyContent: "center" }}>Selected Step: {currentStep}</p>
            <div style={{ color: "white",marginTop:"30px", marginBottom:"30px",paddingLeft: "20px", display: "flex", justifyContent: "center", fontWeight: "bold" }}>{(() => {
                if (currentStep == 1) {
                    return (
                        <div >Copy the HTML code generated from the generation process</div>
                    )
                } else if (currentStep == 2) {
                    return (
                        <div >Click the Editor button to go to Editor Model</div>
                    )
                } else if (currentStep == 3) {
                    return (
                        <div>In the Editor interface there is a custom code</div>
                    )
                }
                else if (currentStep == 4) {
                    return (
                        <div>Drag and drop custom code to canavs</div>
                    )
                }
                else {
                    return (
                        <div>Paste code in the widget</div>
                    )
                }
            })()}
            </div>
            <button className="primaryButton" disabled={currentStep === 1} onClick={() => updateStep(currentStep - 1)}>Previous Step</button>
            <div className="btnEditor">
                <a href="/Grapes"><button name="btdow" type="submit" >Editor</button></a>
            </div>
        </div>

    );
}

export default Step;
