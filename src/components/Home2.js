import React, { useState, useEffect } from "react";
import "./styles/home2.css";
import "animate.css";
import c1 from "./assets/c1.jpg";
import teder from "./assets/teder.jpg";
import lpt from "./assets/lpt.jpeg";
import webitect from "./assets/webitect.jpeg";
import onntek from "./assets/onntek.jpg";
import csuf from "./assets/csuf.png";
import gmail from "./assets/gmail.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import resume from "./assets/resume.png";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

function Home2({ themeColorMode }) {
  const [toolTipName, setToolTipName] = React.useState("Copy");
  const [toolTipPlacement, setToolTipPlacement] = React.useState("bottom");
  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 300,
      maxHeight: 200,
    },
  });
  const handleToolTip = () => {
    setTimeout(() => {
      setToolTipName("Copy");
    }, 200);
  };

  useEffect(() => {
    setToolTipName("Copy");
  }, []);

  return (
    <div class="home-container">
      <div className="name-container">
        <h1>
          <span className="hero-name">Wilson Tu</span> 👋
        </h1>
      </div>
      <div
        className={
          themeColorMode === "light" ? "bio-container" : "bio-container-dark"
        }
      >
        <p>
          I am a student at California State University, Fullerton majoring in
          Computer Science graduating in May 2023. I am actively searching for{" "}
          <span>New Grad 2023 Software Engineer</span> positions preferably in{" "}
          <span>New York City</span>! I am passionate about software engineering
          with an emphasis on full-stack development and AI/ML development. I am
          always eager to learn and expand my knowledge of different
          technologies.
        </p>
        <br></br>
        <p>
          Currently interested in Web3.0 and Defi blockchain technology. I am
          working towards getting AWS Cloud Practioner certified!
        </p>
      </div>
      <div className="education-container">
        <h2>👨🏻‍🎓 Education</h2>
        <div className="education-box">
          <div className="education-box-left">
            <img src={csuf} alt="California State University" />
          </div>
          <div className="education-box-right">
            <h4>Bachelor of Science in Computer Science</h4>
            <p>@ California State University, Fullerton (CSUF)</p>
            <p>Graduation Date: May 2023</p>
          </div>
        </div>
      </div>

      <div className="work-experience-container">
        <h2>💻 Work Experience</h2>
        <div className="job-container">
          <div className="top-half">
            <div className="company-logo">
              <img src={webitect} />
            </div>
            <div className="role-location-date-description-container">
              <p className="role-title">CEO & Founder</p>
              <p>Webitect · Self-employed</p>
              <p
                style={{
                  color: "#96999b",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Nov 2022 - Present
              </p>
              <p
                style={{
                  color: "#96999b",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Los Angeles, California, United States
              </p>
              <p className="job-description">
                🌎 Building web solutions to help grow small businesses 🌱
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            themeColorMode === "light" ? "job-divider" : "job-divider-dark"
          }
        ></div>
        <div className="job-container">
          <div className="top-half">
            <div className="company-logo">
              <img src={lpt} />
            </div>
            <div className="role-location-date-description-container">
              <p className="role-title">Software Engineer</p>
              <p>LongPath Technologies, Inc. · Part-time</p>
              <p
                style={{
                  color: "#96999b",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Oct 2022 - Present
              </p>
              <p
                style={{
                  color: "#96999b",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Boulder, Colorado, United States
              </p>
              <p className="job-description">Methane emissions stuff 💨</p>
            </div>
          </div>
        </div>
        <div
          className={
            themeColorMode === "light" ? "job-divider" : "job-divider-dark"
          }
        ></div>

        <div className="job-container">
          <div className="top-half">
            <div className="company-logo">
              <img src={c1} />
            </div>
            <div className="role-location-date-description-container">
              <p className="role-title">Software Engineer Intern</p>
              <p>Capital One · Internship</p>
              <p
                style={{
                  color: "#96999b",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Jun 2022 - Aug 2022 · 3 mons
              </p>
              <p
                style={{
                  color: "#96999b",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                McLean, Virginia, United States
              </p>
              <p className="job-description">
                • Designed and built an internal web application tool that
                displays aggregation charts for NPSL account, transaction, and
                product information using Chart.js, Typescript, AWS DynamoDB,
                Lambda, ALB, and S3.
              </p>
              <p className="job-description">
                • Performed extraction, transformation, and batch processing on
                over 15,000 records from CDE exhaust pipeline for data
                aggregation using Databricks and PySpark.
              </p>
              <p className="job-description">
                • Developed a DynamoDB writer using Boto3 that converts
                dataframes to JSON objects for database storage.
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            themeColorMode === "light" ? "job-divider" : "job-divider-dark"
          }
        ></div>
        <div className="job-container">
          <div className="top-half">
            <div className="company-logo">
              <img src={teder} />
            </div>
            <div className="role-location-date-description-container">
              <p className="role-title">Full-Stack Engineer Intern</p>
              <p>Teder · Internship</p>
              <p
                style={{
                  color: "#96999b",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Oct 2021 - Mar 2022 · 6 mons
              </p>
              <p
                style={{
                  color: "#96999b",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Manhattan, New York, United States
              </p>
              <p className="job-description">
                • Built a client-facing web dashboard application that displays
                high-level artist information such as revenue, show times, and
                total sales using React, Django, MongoDB, and AWS Cognito.
              </p>
              <p className="job-description">
                • Refactored 2000+ lines of Javascript code to improve
                optimization and performance by more than 60%.
              </p>
              <p className="job-description">
                • Conducted user research and designed low and high-fidelity
                wireframes for new features using Figma.
              </p>
              <p className="job-description">
                • Participated closely with CTO in design and planning sessions
                to provide guidance and feedback on application and system
                designs.
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            themeColorMode === "light" ? "job-divider" : "job-divider-dark"
          }
        ></div>
        <div className="job-container">
          <div className="top-half">
            <div className="company-logo">
              <img src={onntek} />
            </div>
            <div className="role-location-date-description-container">
              <p className="role-title">Front-End Engineer Intern</p>
              <p>Onntek · Internship</p>
              <p
                style={{
                  color: "#96999b",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Jun 2021 - Sep 2021 · 3 mons
              </p>
              <p
                style={{
                  color: "#96999b",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Los Angeles, California, United States
              </p>
              <p className="job-description">
                • Deployed and maintained web and mobile applications across 3
                different platforms for residential and commercial construction
                businesses using React and React Native
              </p>
              <p className="job-description">
                • Integrated features for interactive blueprint planning and
                design to decrease client workload by more than 70% and
                generated an overall increase in revenue.
              </p>
              <p className="job-description">
                • Utilized K6.io to test web performance and refactored existing
                codebase by implementing memoization and code splitting to
                decrease application load time by 20%.
              </p>
            </div>
          </div>
        </div>

        <div className="resume-container">
          <a href={require("./assets/Wilson-Tu-Resume.pdf")} target="_blank">
            <div className="resume-button">
              <img src={resume}></img>
              <p>Take My Resume!</p>
            </div>
          </a>

          <a href={"https://www.buymeacoffee.com/wilsontu"} target="_blank">
            <div className="coffee-button">
              <p>☕ Buy Me Coffee!</p>
            </div>
          </a>
        </div>
      </div>
      <div className="contact-container">
        <h2>📱 Contact Me</h2>
        <div className="contact-info-container">
          <div className="email">
            <img src={gmail}></img>
            <CustomWidthTooltip
              title={toolTipName}
              placement={toolTipPlacement}
            >
              <button
                onClick={() => {
                  navigator.clipboard.writeText("wilsontu4979@gmail.com");
                  setToolTipName("Email Copied!");
                }}
                onMouseLeave={() => {
                  handleToolTip();
                }}
              >
                <Typography paragraph="true" color="primary">
                  wilsontu4979@gmail.com
                </Typography>{" "}
              </button>
            </CustomWidthTooltip>
          </div>
          <div className="linkedin">
            <img src={linkedin}></img>
            <a href="https://www.linkedin.com/in/wilson-tu/" target="_blank">
              <Typography paragraph="true" color="primary">
                linkedin.com/in/wilson-tu/
              </Typography>
            </a>
          </div>

          <div className="linkedin">
            <img src={github}></img>
            <a href="https://github.com/wtu4979" target="_blank">
              <Typography paragraph="true" color="primary">
                github.com/wtu4979{" "}
              </Typography>
            </a>
          </div>
        </div>
      </div>
      <p className="footer-text">Wilson Tu © 2023 All Rights Reserved</p>
    </div>
  );
}

export default Home2;
