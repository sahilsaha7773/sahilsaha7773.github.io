import React from 'react';
import { Memory, School, Code, GitHub, Instagram, Brightness4, Twitter, Facebook, LinkedIn, Favorite} from '@material-ui/icons';
import Skills from './Components/Skills'
import Education from './Components/Education'
import Awards from './Components/Awards'
import Certifications from './Components/Certifications'
import {Skeleton} from '@material-ui/lab'
import {LinearProgress, Avatar, Grid, Button, IconButton, Grow, Typography, Container, CssBaseline, makeStyles, createMuiTheme, Box, Switch, ThemeProvider } from '@material-ui/core'
import myimg from './myImg.jpg'
const styles = {
  'btn': {
    marginRight: 20,
    marginTop: 20
  },
  'icon':{
    marginTop: 20,
    marginBottom: 20
  }
}
class App extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      currentTab: "skills",
      dark: false,
      theme: "light"
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(event, value){
    if(value==="skills"){
      this.setState(state => ({
            currentTab: "skills"
      }));
      console.log(this.state)
    }
    else if(value==="education"){
      this.setState(state => ({
            currentTab: "education"
      }));
      console.log(this.state)
    }
    else if(value==="awards"){
      this.setState(state => ({
            currentTab: "awards"
      }));
      console.log(this.state)
    }
    else if(value==="certifications"){
      this.setState(state => ({
            currentTab: "certifications"
      }));
      console.log(this.state)
    }
  }
  
  handleChange(e){
    this.setState((prevState)=>{
      return({
        ...prevState,
        dark: !prevState.dark,
        theme: prevState.theme==="light"?"dark":"light"
      })
    })
  }

  render(){
    
    const darkTheme = createMuiTheme({
      palette: {
        type: this.state.theme,
      }
    });

    let comp
    if(this.state.currentTab==='skills'){
      comp = <Skills />
    }
    else if(this.state.currentTab==='education'){
      comp = <Education />
    }
    else if(this.state.currentTab==='awards'){
      comp = <Awards />
    }
     else if(this.state.currentTab==='certifications'){
      comp = <Certifications />
    }

    return (
      <ThemeProvider theme={darkTheme}>
      <Box display="flex" style={{marginTop: 20, float: "right", marginRight: 20}}>
        <Switch
              checked={this.state.dark}
              onChange={(e)=>this.handleChange(e)}
              name="themeToggler"
              color="primary"
              label={<Brightness4/>}
            /><Brightness4/>
      </Box>
      <Grid container style={{marginTop: 40, textAlign:'center', justifyContent: 'center' }} justify="center" alignItems="center">
        <div className="App">
          <CssBaseline />
            <Avatar alt="Sahil Saha" src={myimg} style={{width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto'}}/>
            <Typography variant="h3">
              Sahil Saha
            </Typography>
            <IconButton style={styles.icon} href="https://github.com/sahilsaha7773" target="blank">
              <GitHub />
            </IconButton>
            <IconButton style={styles.icon} href="https://www.instagram.com/sahil_saha7775/" target="blank">  
              <Instagram />
            </IconButton>
            <IconButton style={styles.icon} href="https://www.facebook.com/sahil.saha.94849410/" target="blank">  
              <Facebook />
            </IconButton>
            <IconButton style={styles.icon} href="https://twitter.com/SahilSaha35194" target="blank">  
              <Twitter />
            </IconButton> 
            <IconButton style={styles.icon} href="https://linkedin.com/in/sahil-saha-76478516b" target="blank">  
              <LinkedIn />
            </IconButton>      
            <Container style={{width:"80%"}}>
              <Typography variant="subtitle1" gutterBottom>
                Hey! Glad to see you here! I am a teen from India, generally you can find me making sites, mobile apps,
                 or playing with deep learning models, neural nets and optimizing algorithms.
                  I also love to contribute to open source, play guitar and learn new technologies everyday.</Typography>
            </Container>
            <Button style={styles.btn} variant="contained" color="primary" onClick={(e)=>this.handleClick(e, "skills")} >
              <Memory/>
              Skills
            </Button>
            <Button style={styles.btn} variant="contained" color="secondary" onClick={(e)=>this.handleClick(e, "education")} >
              <School />
              Education
            </Button>
            <Button style={styles.btn} variant="contained" color="primary" onClick={(e)=>this.handleClick(e, "awards")}>
              <Code/>
              Awards
            </Button>
            <Button style={styles.btn} variant="contained" color="secondary" onClick={(e)=>this.handleClick(e, "certifications")}>
              <School />
              Certifications
            </Button>
              {comp}
            
        </div>
        <Box display="flex" style={{marginBottom: 20}}><Typography  color="textSecondary">Made with</Typography><Box style={{marginLeft: 4, marginRight: 4}}><Favorite/></Box><Typography  color="textSecondary">by Sahil Saha</Typography></Box>
      </Grid>
      </ThemeProvider>
    );
  }
}

export default App;
