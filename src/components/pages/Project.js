import React from "react";

function Project(props) {
  return (
    <div className="projects">
      <div className="container">

        <img className="card" alt={props.title} src={props.image} />

      </div>
      <div className="content">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <strong>{props.title}</strong>
          </li>
          <li>
            {props.description}
          </li>
          <li>
            {props.tech}
          </li>
          <li>
            <a href={props.linkToApp} target="_blank" >Link to App</a>
          </li>
          <li>
            <a href={props.linkToRepo} target="_blank" >Link to GitHub Repo</a>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Project;

