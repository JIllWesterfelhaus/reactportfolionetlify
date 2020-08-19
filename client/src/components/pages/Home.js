import React from "react";
import Headshot from "../JW headshot.png";
 
function Home() {
    return (
      <div className="homepage">
        <h1>Hi!</h1>
        
        <div className="Headshot"style={{display: "flex", justifyContent: "center"}}>
        <img className="rounded-circle"style={{width: "35%"}} src={Headshot} alt="Jill Westerfelhaus" />
        </div>
        
        <h5 className="text-center">I am a recent graduate of Northwestern University's Full Stack Web Development Coding Bootcamp.</h5>  

      <h5 className="text-center">My skills include HTML, CSS, Bootstrap, Responsive Design, Javascript, JQuery, Node, Express, mySQL, Mongo, PWA's, React and Photoshop.</h5>

      <h5 className="text-center">I am currently an intern at <a href="https://www.queensweb.org/" target="_blank">Queen's Webs.</a></h5>

    <h5 className="text-center">Please take a look around and see what I learned!</h5>
      
      </div>
      
    );
  }
  
  export default Home;