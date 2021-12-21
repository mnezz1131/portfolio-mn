import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="container">
      <div className="row about-me-row-h1">
        <div className="col about-me-col-h1" size="md-12">
          <h1>About Me</h1>
        </div>
      </div>
      <div className="row ">
        <div className=" about-me-col" size="md-12">
          <p className="about-me-text">
            I am software engineer/web developer transferring skills from years
            of accounting experience to the coding world. I have earned my
            certificate in Full Stack Development from General Assembly
            immersive boot camp, with curriculum that focused on HTML, CSS,
            JavaScript, Node Js, React, Ruby, Rails as well as others. Attention
            to detail and problem solving skills translate well from Accounting
            to web development. Being a creative team member and seeing the
            design aspects and coding come together is extremely gratifying and
            fulfilling and motivates me. I know how to thrive in a team
            environment, working as part of a small Finance section and coding
            on team projects in the General Assembly cohort. I’m enthusiastic about the opportunities for
            constant learning and growth in the burgeoning field of full stack
            development.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col" size="md-12">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="row">
        <div className="class" size="md-12">
          <p className="about-me-contact">
            Email: mnezz1131@gmail.com &nbsp; | &nbsp; Phone: 512-785-0540
            &nbsp; | &nbsp;
            <a href="https://www.linkedin.com/in/michael-nezzer-11b956196/">
              {" "}
              LinkedIn
            </a>{" "}
            &nbsp;| &nbsp; <a href="https://github.com/mnezz1131"> Git Hub</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
