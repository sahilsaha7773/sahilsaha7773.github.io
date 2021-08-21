import './App.css';
import { createTheme, Paper, Drawer, ThemeProvider, CssBaseline, AppBar, Toolbar, IconButton, Typography, Button, Avatar, Container, Switch, createMuiTheme, Tabs, Tab, SwipeableDrawer } from '@material-ui/core';
import { useEffect, useState } from 'react';
import logoSS from './images/logoSS.png';

import Home from './pages/Home';
import './styles/index.css';
import {
  BrowserRouter as Router,
  Switch as SwitchRoute,
  Route,
  Link
} from "react-router-dom";
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import { Brightness4, Brightness7, Close, Menu } from '@material-ui/icons';
import Cookies from 'js-cookie';
import CookieConsent from 'react-cookie-consent';

function App() {
  const [mode, setMode] = useState('light');
  useEffect(() => {
    setMode(Cookies.get('mode') === undefined ? 'light' : Cookies.get('mode'));
  }, []);
  const [drawerOpen, setDrawerOpen] = useState(false);
  //Create MUI theme
  const theme = createTheme({
    palette: {
      type: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CookieConsent
        location="bottom"
        buttonText="Go for it!!!"
        cookieName="CookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "14px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
      <Router>
        <CssBaseline />
        <Drawer
          anchor="right"
          open={drawerOpen}
        >
          <Close
            onClick={(e) => {
              setDrawerOpen(false);
            }}
          />
          <Link to='/blog'>
            <Button variant="outlined" >Blog</Button>
          </Link>
          <Link to='/projects'>
            <Button variant="outlined" >Projects</Button>
          </Link>
          <Button variant="outlined" >Awards</Button>
        </Drawer>
        <div className="App" >
          <AppBar position="static" color="primary" style={{ backgroundColor: mode == 'dark' ? "transparent" : "#fff" }}>
            <Toolbar>
              <Link to="/">
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <img src={logoSS} width="60px" />
                </IconButton>
              </Link>

              <div style={{
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center'
              }}
                className="navbar-right">
                <Link to='/blog'>
                  <Button variant="outlined" >Blog</Button>
                </Link>
                <Link to='/projects'>
                  <Button variant="outlined" >Projects</Button>
                </Link>
                <Button variant="outlined" >Awards</Button>
                <Switch
                  color="primary"
                  checked={mode == 'dark' ? true : false}
                  onChange={(e) => {
                    setMode(e.target.checked ? 'dark' : 'light');
                    if (Cookies.get('CookieConsent'))
                      Cookies.set('mode', e.target.checked ? 'dark' : 'light');
                  }}
                />
                {
                  mode === 'light' ? (
                    <Brightness7 style={{ color: "black" }} />
                  ) : (
                    <Brightness4 />
                  )
                }
                <Menu
                  onClick={(e) => {
                    setDrawerOpen(!drawerOpen);
                  }}
                />
              </div>
            </Toolbar>
          </AppBar>
          <SwitchRoute>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/projects" component={Projects} />
          </SwitchRoute>
        </div>
        {/* <Typography variant="subtitle1" style={{ textAlign: "center", marginTop: "40px" }}>Made with ❤️</Typography> */}

      </Router>
    </ThemeProvider>
  );
}

export default App;
