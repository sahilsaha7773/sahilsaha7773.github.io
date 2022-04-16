import { Card, Container, Typography } from "@material-ui/core";
import React from "react";
import skillsIllu from "../images/skillsIllu.svg";
import "../styles/index.css";

function Skills() {
  return (
    <div>
      <Card
        style={{
          width: "100%",
          padding: "80px 20px",
          // marginLeft: 'auto',
          // marginRight: 'auto',
        }}
      >
        <Container style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{}}>
            {/* <img src={skillsIllu} className="skills__illu" width="200px" /> */}
            {/* <Typography color="inherit" variant="h5" style={{ marginTop: "20px" }}>
              Skills
            </Typography> */}
            {/* <Box display="flex"><Typography  color="textSecondary">Languages</Typography><Box style={{marginLeft: 8}}><Code/></Box></Box> */}
            <div className="skills-container">
              <a
                href="https://www.gnu.org/software/bash/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
                  alt="bash"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a
                href="https://getbootstrap.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                  alt="bootstrap"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a
                href="https://www.cprogramming.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                  alt="c"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a
                href="https://www.w3schools.com/cpp/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                  alt="cplusplus"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a
                href="https://www.djangoproject.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg"
                  alt="django"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a
                href="https://www.docker.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                  alt="docker"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="express"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                  alt="firebase"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a
                href="https://flask.palletsprojects.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg"
                  alt="flask"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a href="https://flutter.dev" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
                  alt="flutter"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a
                href="https://cloud.google.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
                  alt="gcp"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="git"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a href="https://golang.org" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"
                  alt="go"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a href="https://www.java.com" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                  alt="java"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a href="https://kubernetes.io" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg"
                  alt="kubernetes"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                  alt="linux"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="mongodb"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                  alt="mysql"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a href="https://www.python.org" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  alt="python"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="40"
                  height="40"
                />{" "}
              </a>{" "}
              <a href="https://redux.js.org" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="redux"
                  width="40"
                  height="40"
                />{" "}
              </a>
            </div>
          </div>
        </Container>
      </Card>
    </div>
  );
}

export default Skills;
