import React from "react";
import Headshot from "../JW headshot.png";

function About() {
    return (
       
        <div>
        <h2>About Me</h2>
        <div className="aboutMe">
            <div className="Headshot">
        <img className="rounded-circle" style={{width: "25%"}} src={Headshot} alt="Jill Westerfelhaus" />
        </div>
        <div className="row d-flex justify-content-center"> 
    <p>I am a recent graduate of Northwestern University's Full Stack Web Development Coding Bootcamp. What I like about web development is the moment when you click a button and a real working webpage that you made pops up. It reminds me of my days working in darkroom photography, watching an image come up in the tray of developer, under the glow of a safelight.</p>
       <p>I have worked as a darkroom photo lab tech, and now I am pursuing a career in web development.  In between, I was a Licensed Clinical Professional Counselor, conducting assessments on people with severe mental illness. I bring skills in listening and working with people to web development, as well as the aesthetics and technology of photography. I am excited to bring all my skills and knowledge to this new field. </p>
    </div>
</div>
<h5 className="text-center">Email:  jillwesthaus@gmail.com</h5>  
    <h5 className="text-center">Phone:  773-592-7923</h5>
    <h5 className="text-center"><a href="https://www.linkedin.com/in/jill-westerfelhaus-a821761a/" target="_blank">LinkedIn</a></h5>
    <h5 className="text-center"><a href="https://github.com/JIllWesterfelhaus" target="_blank">GitHub</a></h5>
    <h5 className="text-center"><a href="https://drive.google.com/file/d/1uI29ld_OinWKOvuB_AKhaZKmx78qHQEb/view?usp=sharing" target="_blank">Resume</a></h5>   
</div>
); 
  }
  
  export default About;
  