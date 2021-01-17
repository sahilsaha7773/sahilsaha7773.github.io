import { Button, TextField } from "@material-ui/core";
import React from "react";
import './ContactMe.css'
import contactIllu from '../contactIllu.svg'
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <div style={{fontSize:"large"}}> 
        <img src={contactIllu} className="contact__illu"/>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/meqpnjyo"
          method="POST"
        >
        <h2>Contact me</h2> 
        <TextField className="field" label="Email" name="email" variant="outlined"/><br/>
        <TextField className="field" label="Message" name="message" multiline rows={4} variant="outlined"/><br/>
          {/* <label>Email:</label>
          <input type="email" name="email" />
          <label>Message:</label>
          <input type="text" name="message" /> */}
          {status === "SUCCESS" ? <p>Thanks! I will try to reply asap!</p> : <p></p>}
          <button className="send" >Send</button>
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>

        </div>
    );
  }

  submitForm(ev) {
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
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}