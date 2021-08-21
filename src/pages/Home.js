import React from 'react'
import { createTheme, Paper, ThemeProvider, CssBaseline, AppBar, Toolbar, IconButton, Typography, Button, Avatar, Container, Switch, createMuiTheme, Tabs, Tab } from '@material-ui/core';
import myImg2 from '../images/myImg2.jpg'
import { Class, Code, Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import Skills from '../components/Skills';
import Education from '../components/Education';

function Home() {
  const [tabValue, setTabValue] = React.useState(0);

  const styles = {
    'btn': {
      marginRight: 10,
      marginLeft: 10,
      marginTop: 20
    },
    'icon': {
      marginTop: 20,
      marginBottom: 20
    }
  }
  return (
    <div>
      <div className="main">
        <div className="main-header">
          <Avatar alt="Sahil Saha" src={myImg2} style={{ width: 130, height: 130, marginLeft: 'auto', marginRight: 'auto' }} className="main__image" />
          <Typography variant="h3" className="main__title">
            Sahil Saha
          </Typography>
          <IconButton style={styles.icon} href="https://github.com/sahilsaha7773" target="blank">
            <GitHub fontSize="large" className="icons" />
          </IconButton>
          <IconButton style={styles.icon} href="https://www.instagram.com/_.sahil.s._/" target="blank">
            <Instagram fontSize="large" />
          </IconButton>
          <IconButton style={styles.icon} href="https://www.facebook.com/sahil.saha.94849410/" target="blank">
            <Facebook fontSize="large" />
          </IconButton>
          <IconButton style={styles.icon} href="https://twitter.com/SahilSaha35194" target="blank">
            <Twitter fontSize="large" />
          </IconButton>
          <IconButton style={styles.icon} href="https://linkedin.com/in/sahil-saha-76478516b" target="blank">
            <LinkedIn fontSize="large" />
          </IconButton>
          <Container style={{ width: "70%" }}>
            <Typography variant="subtitle1" gutterBottom className="about__text">
              Glad to see you here! I am a passionate developer from India, I love to make cool projects and solve coding problems in my free time.
            </Typography>
          </Container>

        </div>
        <div className="main-body">
          <div>
            <Tabs value={tabValue}>
              <Tab onClick={(e) => setTabValue(0)} label="Skills" style={{ fontWeight: "700 !important" }} />
              <Tab onClick={(e) => setTabValue(1)} label="Education" style={{ fontWeight: "700 !important" }} />
              {/* <Tab onClick={(e) => setTabValue(2)} label="Awards" /> */}
            </Tabs>
          </div>
          {tabValue == 0 && <Skills />}
          {tabValue == 1 && <Education />}
        </div>
      </div>
    </div>
  )
}

export default Home
