import React, { useState, useEffect } from "react";
import "./styles/home2.css";
import "animate.css";
import c1 from "./assets/c1.jpg";
import teder from "./assets/teder.jpg";
import lpt from "./assets/lpt.jpeg";
import webitect from "./assets/webitect.jpeg";
import onntek from "./assets/onntek.jpg";
import csuf from "./assets/csuf.png";
import gtech2 from "./assets/gtech2.png";
import gmail from "./assets/gmail.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import resumePDF from "./assets/Wilson-Tu-Resume-2023.pdf";
import { pdfjs } from "react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { Snackbar } from "@mui/material";

// This makes the pdf loader thing work
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function Home2({ themeColorMode }) {
  const [toolTipName, setToolTipName] = React.useState("Copy");
  const [toolTipPlacement, setToolTipPlacement] = React.useState("bottom");
  const [numPages, setNumPages] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [contactName, setContactName] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [open, setOpen] = useState(false);

  const currentDate = new Date();
  const longPathStartYear = 2022;
  const longPathStartMonth = 10;
  const webitectStartYear = 2022;
  const webitectStartMonth = 11;
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailError(!regex.test(event.target.value));
  };

  const handleContactNameChange = (event) => {
    setContactName(event.target.value);
  };

  const handleContactMessageChange = (event) => {
    setContactMessage(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const validateForm = () => {
    let newErrors = { name: "", email: "", message: "" };
    if (!contactName) newErrors.name = "Name cannot be empty";
    if (!email) newErrors.email = "Email cannot be empty";
    if (!contactMessage) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setOpen(true);
      setContactName("");
      setEmail("");
      setContactMessage("");
    }
  };

  // Currently set for longpath
  let longPathMonths;
  longPathMonths = (currentYear - longPathStartYear) * 12;
  longPathMonths -= longPathStartMonth;
  longPathMonths += currentMonth;
  longPathMonths = longPathMonths <= 0 ? 0 : longPathMonths;

  // Currently set for Webitect
  let webitectMonths;
  webitectMonths = (currentYear - webitectStartYear) * 12;
  webitectMonths -= webitectStartMonth;
  webitectMonths += currentMonth;
  webitectMonths = webitectMonths <= 0 ? 0 : webitectMonths;

  const DownloadButton = styled(Button)(({ theme }) => ({
    background: "transparent",
    color: "#1976d2",
    borderRadius: "20px",
    fontSize: "12px",
    borderColor: "rgba(178, 204, 239, 0.7)",
    "&:hover": {
      background: "rgba(178, 204, 239, 0.15)",
      color: "#1976d2",
    },
  }));

  const ContactSubmitButton = styled(Button)(({ theme }) => ({
    background: "transparent",
    color: "#1976d2",
    borderRadius: "20px",
    fontSize: "12px",
    borderColor: "rgba(178, 204, 239, 0.7)",
    "&:hover": {
      background: "rgba(178, 204, 239, 0.15)",
      color: "#1976d2",
    },
  }));

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
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

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Wilson-Tu-Resume.pdf";
    link.target = "_blank";
    link.click();
  };

  useEffect(() => {
    setToolTipName("Copy");
  }, []);

  return (
    <div class="home-container">
      <Alert severity="warning">Website is still in development...</Alert>

      <div className="name-container">
        <h1>
          <span className="hero-name">Wilson Tu</span>
          <span class="wave">👋</span>
        </h1>
      </div>
      <div
        className={
          themeColorMode === "light" ? "bio-container" : "bio-container-dark"
        }
      >
        <p>
          🎓 I am currently pursuing a Master's degree in Computer Science,
          specializing in Machine Learning, at the esteemed{" "}
          <span>Georgia Institute of Technology</span>. Having recently
          completed my undergraduate studies in Computer Science from California
          State University, Fullerton 🎉, I have now embarked on my professional
          journey as a Software Engineer based in <span>New York City</span> 🗽!
          My passion lies in software engineering, particularly full-stack
          development and AI/ML development 💡. Driven by an insatiable
          curiosity, I am constantly eager to learn 📚 and broaden my
          understanding of various technologies 💻.
        </p>
        <br></br>
        <p>
          🔍 I'm deeply intrigued by Web3.0 and Defi blockchain technology 🌐.
          I'm also diligently working towards achieving my AWS Cloud
          Practitioner certification!
        </p>
      </div>
      <div className="education-container">
        <h2>👨🏻‍🎓 Education</h2>
        <div className="education-box">
          <div className="education-box-left">
            <img src={gtech2} alt="Georgia Institute of Technology" />
          </div>
          <div className="education-box-right">
            <h4>Master of Science in Computer Science</h4>
            <p>@ Georgia Institute of Technology (GTech)</p>
            <p>Graduation Date: May 2025</p>
          </div>
        </div>
        <div className="education-box">
          <div className="education-box-left">
            <img src={csuf} alt="California State University" />
          </div>
          <div className="education-box-right">
            <h4>Bachelor of Science in Computer Science </h4>
            <p>@ California State University, Fullerton (CSUF)</p>
            <p className="labelText">
              Graduation Date: May 2023{" "}
              <FontAwesomeIcon icon={faCheck} color="green" />
            </p>
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
                Nov 2022 - Present · {webitectMonths + 1} mos
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
                Oct 2022 - Present · {longPathMonths + 1} mons
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
                🛠️ Developed an internal web application tool that displays
                aggregation charts for NPSL account, transaction, and product
                information for financial analysis and data visualization using
                React, Chart.js, and AWS.
              </p>
              <p className="job-description">
                📊 Performed extraction, transformation, and batch processing on
                over 15,000 records from CDE exhaust pipeline for data
                aggregation using Databricks and PySpark.
              </p>
              <p className="job-description">
                ☁️ Implemented a DynamoDB writer using Boto3 that processed and
                converted data frames to JSON objects for database cloud
                storage.
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
                🚀 Led the development of a client-facing web dashboard
                application that displays high-level artist information such as
                revenue, show times, and total sales using React, Django,
                MongoDB, and AWS Cognito.
              </p>
              <p className="job-description">
                🔧 Refactored 2000+ lines of JavaScript code to improve
                optimization and web performance by more than 25%.
              </p>
              <p className="job-description">
                🎨 Conducted UX/UI research and designed 15+ low and
                high-fidelity wireframes for new features using Figma.
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
                🚀 Deployed and maintained web and mobile applications across 3
                different platforms for residential and commercial construction
                businesses using React and React Native.
              </p>
              <p className="job-description">
                💡 Integrated features for interactive blueprint planning and
                design to decrease client workload by more than 70% and
                generated an overall increase in revenue.
              </p>
              <p className="job-description">
                🔧 Utilized K6.io to test web performance and refactored
                existing codebase by implementing memoization and code splitting
                to decrease application load time by 20%.
              </p>
            </div>
          </div>
        </div>
        <div className="download-button">
          <DownloadButton
            variant="outlined"
            onClick={handleDownloadResume}
            sx={{
              "&:hover .MuiButton-endIcon": {
                animation: "floating 2s infinite",
                "@keyframes floating": {
                  "0%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-3px)" },
                  "100%": { transform: "translateY(0px)" },
                },
              },
            }}
            endIcon={<FileDownloadIcon />}
          >
            Download Resume
          </DownloadButton>
        </div>
      </div>
      <div className="contact-container">
        <h2>📱 Contact Me</h2>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <div class="contact-form-content">
            <TextField
              required
              id="outlined-required"
              label="Name"
              value={contactName}
              onChange={handleContactNameChange}
              helperText={errors.name}
              error={Boolean(errors.name)}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              value={email}
              onChange={handleEmailChange}
              error={emailError || Boolean(errors.email)}
              helperText={
                errors.email || emailError ? "Invalid email format" : ""
              }
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              defaultValue=""
              value={contactMessage}
              onChange={handleContactMessageChange}
              helperText={errors.message}
              error={Boolean(errors.message)}
            />
            <ContactSubmitButton
              variant="outlined"
              fullWidth
              sx={{
                "&:hover .MuiButton-endIcon": {
                  animation: "wiggle 0.5s infinite",
                },
              }}
              endIcon={<SendIcon />}
              onClick={handleSubmit}
            >
              Submit
            </ContactSubmitButton>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert onClose={handleClose} severity="success">
                Message sent successfully!
              </Alert>
            </Snackbar>
          </div>
        </Box>
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
