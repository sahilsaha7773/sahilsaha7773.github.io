import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logoSS from '../images/logoSS.png'

function Footer() {
  const [status, setStatus] = useState({});
  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        //console.log("sadasdsa");
        setStatus({ status: "SUCCESS" });
      } else {
        setStatus({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
  return (
    <footer className="footer">
      <div style={{ fontSize: "large" }} className="contact-div">
        <img className="contact__illu" />
        <form
          onSubmit={submitForm}
          action="https://formspree.io/f/meqpnjyo"
          method="POST"
        >
          <h2 style={{ color: "white", margin: "20px 0 20px 0" }}>Contact me</h2>
          <TextField style={{ width: "100%", color: "white" }} className="field" label="Email" name="email" variant="outlined" /><br />
          <TextField style={{ width: "100%", margin: "20px 0 0 0", color: "white !important" }} className="field" label="Message" name="message" multiline rows={4} variant="outlined" /><br />
          {/* <label>Email:</label>
          <input type="email" name="email" />
          <label>Message:</label>
          <input type="text" name="message" /> */}
          {status.status === "SUCCESS" ? <p>Thanks! I will try to reply asap!</p> : <p></p>}
          <button className="send-btn" >Send</button>
          {status.status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>

      </div>
      <div className="footer-right">

        <div style={{ marginLeft: "40px" }}>
          <img src={logoSS} width="160px" className="footer-logo" style={{ objectFit: "contain" }} />
        </div>
        <div className="footer-site">
          {/* <Link to='/blog'>
            Blog
          </Link> */}
          <Link to='/projects'>
            Projects
          </Link>
          <a href="https://drive.google.com/file/d/1tBbNaIsl-ceApFpRjAwfgJDz_cWPrPr5/view?usp=sharing" target="_blank" className="navbar-link">
            Resume
          </a>
          <p style={{ color: 'white', margin: "20px 0", }}>Made with ❤️ and ☕</p>
        </div>
        <div className="footer-social">
          <a href='https://github.com/sahilsaha7773' target="_blank">
            GitHub
          </a>
          <a href='https://linkedin.com/in/sahil-saha-76478516b' target="_blank">
            Linkedin
          </a>
          <a href='https://www.instagram.com/_.sahil.s._/' target="_blank">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
