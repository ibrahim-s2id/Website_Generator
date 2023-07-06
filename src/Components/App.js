import React from "react";
import { BrowserRouter as Router,Routes , Route } from "react-router-dom";
import Header from "./Reactjava/Header";
import Login from "./Reactjava/Login.js";
import Register from './Reactjava/Register.js';
import Home from './Reactjava/Home';
import Logout from "./Reactjava/Logout";
import Sketch_page from "./Reactjava/Sketch_page";
import Upload_image from "./Reactjava/Upload_image";
import Sketch_upload_image from "./Reactjava/Skech_upload_image";
import Take_Picture from "./Reactjava/Take_Picture";
import Drawing_page from "./Reactjava/Drawing_page";
import Sketch_examples from "./Reactjava/Sketch_examples";
import ex1 from "./imagesproject/skpaex1.png";
// import ge1 from "./imagesproject/p";
import ex2 from "./imagesproject/skpaex2.png";
import ge2 from "./imagesproject/skpage2.png";
import ex3 from "./imagesproject/skpaex3.png";
import ge3 from "./imagesproject/skpage3.png";
import ex4 from "./imagesproject/skpaex4.png";
import ge4 from "./imagesproject/skpage4.png";
import Dictaphone from "./Reactjava/Dictaphone";
import Text_write_page from "./Reactjava/Text_write_page";
import Text_page from "./Reactjava/Text_page";
import Step from "./Reactjava/step";
import St from "./Reactjava/st";
import Grapes from "./Reactjava/Grapes";
import GrapesjsMain from "./Reactjava/GrapesMain";
class App extends React.Component{
  
    render(){
      
    return(
                   
                 <div style={{height:"100%"}}> 
                
                <Routes>
                  <Route path="/" exact element={<Home/>}/>
                  <Route path="/Home"  element={<Home/>}/>
                  <Route path="/Sketch_page" element={<Sketch_page/>}/>
                  <Route path="/Login" element={<Login/>}/>
                  <Route path="/Upload_image" element={<Upload_image/>}/>
                  <Route path="/Sketch_upload_image" element={<Sketch_upload_image/>}/>
                  <Route path="/Take_Picture" element={<Take_Picture/>}/>
                  <Route path="/Drawing_page" element={<Drawing_page/>}/>
                  <Route path="/Register" element={<Register/>}/>
                  <Route path="/Sketch_example1" element={<Sketch_examples imageex={ex1} imagege="/images/skpage1.html" />}/>
                  <Route path="/Sketch_example2" element={<Sketch_examples imageex={ex2} imagege="/images/skpage2.html"/>}/>
                  <Route path="/Sketch_example3" element={<Sketch_examples imageex={ex3} imagege="/images/skpage3.html"/>}/>
                  <Route path="/Sketch_example4" element={<Sketch_examples imageex={ex4} imagege="/images/skpage4.html"/>}/>
                  <Route path="/Text_write_page" element={<Text_write_page/>}/>
                  <Route path="/Text_page" element={<Text_page/>}/>

                  <Route path="/Grapes" exact element={<Grapes/>}/>
                  <Route path="/GrapesMain" exact element={<GrapesjsMain/>}/>

                  <Route path="/step" element={<Step/>}/>
                  <Route path="/st" element={<St/>}/>

                  <Route path="/Dictaphone" element={<Dictaphone/>}/>

                  <Route path="/Logout" element={<Logout/>}/>
                </Routes>
                
                </div>
                    
      )
    }
    }

export default App;




