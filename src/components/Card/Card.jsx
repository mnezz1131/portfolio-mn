import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className={"card"}>
      <div className="card-img-container">
        <img className="card-image" alt={props.name} src={props.image} />
      </div>
      <div className="img-content">
        <ul>
          <li>
            <strong>Project: </strong>
            {props.name}{" "}
          </li>

          <li>
            <strong>
              <a href={props.gitHub}>Git Hub Link</a>
            </strong>{" "}
          </li>
          <li>
            <strong>
              {" "}
              <a href={props.deploy} target="_blank" rel="noopener noreferrer">
                Website Link{" "}
              </a>
            </strong>{" "}
          </li>
          <li>
            <strong>Tools:</strong>
            {props.tools}
          </li>
          <li>
            <strong>Summary:</strong>
            {props.summary}
          </li>
        </ul>
      </div>





      
    </div>

    
  );
  
}

export default Card;
