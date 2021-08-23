import { CardActionArea, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { GitHub, Share, Shop } from '@material-ui/icons';
import React from 'react'
import '../styles/projects.css';
import cptracker from '../images/cptracker2.png';

function Projects() {
  return (
    <div className="projects-container">
      <h2>Web Projects</h2>
      <div className="row">
        <Card style={{ maxWidth: "400px", marginLeft: "0" }} className="project-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="250"
              image="https://user-images.githubusercontent.com/35343652/128626830-f2920f94-8ca0-4f10-badc-5ba6bbae5a72.png"
              title="Contemplative Reptile"
              style={{
                objectFit: "contain"
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{
                fontWeight: "400",
                margin: "20px 0"
              }}>
                React Carousel Minimal
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Easy to use, responsive and customizable carousel component for React Projects.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a className="project-gh" href="https://github.com/sahilsaha7773/react-carousel-minimal">
              <GitHub />
            </a>
            <Button color="primary" href="https://www.npmjs.com/package/react-carousel-minimal">
              NPM
            </Button>
          </CardActions>
        </Card>
        <Card style={{ maxWidth: "400px" }} className="project-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="250"
              image="https://user-images.githubusercontent.com/35343652/128392190-553db867-7a94-4ad3-99a9-66ec1994561c.png"
              title="Contemplative Reptile"
              style={{
                objectFit: "contain"
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{
                fontWeight: "400",
                margin: "20px 0"
              }}>
                Mini
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                URL shortening service with authentication support.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a className="project-gh" href="https://github.com/sahilsaha7773/mini">
              <GitHub />
            </a>

          </CardActions>
        </Card>
        <Card style={{ maxWidth: "400px" }} className="project-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="250"
              image={cptracker}
              title="Contemplative Reptile"
              style={{
                objectFit: "contain"
              }}
              unselectable="on"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{
                fontWeight: "400",
                margin: "20px 0"
              }}>
                CP Tracker
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Track your Competetive Programming progress on CodeChef and Codeforces at one place.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a className="project-gh" href="https://github.com/sahilsaha7773/CP-tracker">
              <GitHub />
            </a>

          </CardActions>
        </Card>
      </div>
      <h2>Mobile Projects</h2>
      <div className="row">
        <Card style={{ maxWidth: "400px", marginLeft: "0" }} className="project-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Crew Up"
              height="250"
              image="https://user-images.githubusercontent.com/35343652/125993490-0be5367a-4cd8-414c-8d50-bba13bcb9e30.png"
              title="Crew Up"
              style={{
                objectFit: "contain"
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{
                fontWeight: "400",
                margin: "20px 0"
              }}>
                Crew Up
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Crew Up is a mobile app which supports authentication, real time messaging (RTM) and video calling features (RTC) featuring both one to one and conference video calls.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a className="project-gh" href="https://github.com/Last-Bench-Devs/Crew-Up">
              <GitHub />
            </a>

          </CardActions>
        </Card>
        <Card style={{ maxWidth: "400px" }} className="project-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="250"
              image="https://play-lh.googleusercontent.com/02W4trPhNA0UaokXiQ02X9tGfMMdprkgeYOBYXNA6DyRl-I6qIi0dNNB4lIAtp3wbPY=s180-rw"
              title="Contemplative Reptile"
              style={{
                objectFit: "contain"
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{
                fontWeight: "400",
                margin: "20px 0"
              }}>
                CP Reminders
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">

                "CP Reminders" gathers data about future coding contests announced on the most popular competitive programming platforms and shows them in one place.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a className="project-gh" href="https://play.google.com/store/apps/details?id=com.sahil_saha.cp_reminder">
              <Shop />
            </a>

          </CardActions>
        </Card>
        <Card style={{ maxWidth: "400px", height: "495px" }} className="project-card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="250"
              image="https://ireka.com.my/wp-content/uploads/2021/07/image-placeholder-.jpeg"
              title="Contemplative Reptile"
              style={{
                objectFit: "contain"
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{
                fontWeight: "400",
                margin: "20px 0"
              }}>
                Coming Soon...
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Working on adding more projects.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  )
}

export default Projects
