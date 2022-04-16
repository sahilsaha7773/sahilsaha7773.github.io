import "./App.css";
import {
  createTheme,
  Paper,
  withStyles,
  Drawer,
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  Container,
  Switch,
  createMuiTheme,
  Tabs,
  Tab,
  SwipeableDrawer,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import logoSS from "./images/logoSS.png";
import Loader from "react-loaders";

import Home from "./pages/Home";
import "./styles/index.css";
import {
  HashRouter as Router,
  Switch as SwitchRoute,
  Route,
  Link,
} from "react-router-dom";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import { Brightness4, Brightness7, Close, Menu } from "@material-ui/icons";
import Cookies from "js-cookie";
import CookieConsent from "react-cookie-consent";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");
  const [isLoading, setIsLoading] = useState(false);
  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: "#242337",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#242337",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  useEffect(() => {
    setMode(Cookies.get("mode") === undefined ? "light" : Cookies.get("mode"));
  }, []);
  const [drawerOpen, setDrawerOpen] = useState(false);
  //Create MUI theme
  const theme = createTheme({
    palette: {
      type: mode,
      primary: {
        main: "rgb(6 148 76)",
      },
      secondary: {
        main: "rgb(6 148 76)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {isLoading ? (
        <Loader type="ball-clip-rotate-multiple" />
      ) : (
        <div>
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
            <Drawer anchor="right" open={drawerOpen}>
              <Close
                onClick={(e) => {
                  setDrawerOpen(false);
                }}
              />
              <Link to="/blog">
                <Button variant="outlined">Blog</Button>
              </Link>
              <Link to="/projects">
                <Button variant="outlined">Projects</Button>
              </Link>
              {/* <Button variant="outlined" >Awards</Button> */}
            </Drawer>
            <div className="App" style={{}}>
              <AppBar
                position="fixed"
                color="primary"
                style={{
                  backgroundColor:
                    mode == "dark" ? "rgb(6 148 76)" : "rgb(6 148 76)",
                }}
              >
                <Toolbar>
                  <Link to="/">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                      <img src={logoSS} width="45px" />
                    </IconButton>
                  </Link>
                  <div className="navbar-left">
                    {/* <Link to='/blog' className="navbar-link">
                  <Button variant="outlined" >Blog</Button>
                </Link> */}
                    <Link to="/projects" className="navbar-link">
                      <Button variant="outlined">Projects</Button>
                    </Link>
                    {/* <Link to='/projects' className="navbar-link">
                  <Button variant="outlined" >Awards</Button>
                </Link> */}
                  </div>

                  <div
                    style={{
                      marginLeft: "auto",
                      display: "flex",
                      alignItems: "center",
                    }}
                    className="navbar-right"
                  >
                    <a
                      href="https://drive.google.com/file/d/1tBbNaIsl-ceApFpRjAwfgJDz_cWPrPr5/view?usp=sharing"
                      target="_blank"
                      className="navbar-link"
                    >
                      <Button variant="outlined">Resume</Button>
                    </a>
                    <IOSSwitch
                      color="primary"
                      checked={mode == "dark" ? true : false}
                      onChange={(e) => {
                        setMode(e.target.checked ? "dark" : "light");
                        if (Cookies.get("CookieConsent"))
                          Cookies.set(
                            "mode",
                            e.target.checked ? "dark" : "light"
                          );
                      }}
                    />
                    {mode === "light" ? (
                      <Brightness7 style={{ color: "black" }} />
                    ) : (
                      <Brightness4 style={{ color: "black" }} />
                    )}
                    <Menu
                      onClick={(e) => {
                        setDrawerOpen(!drawerOpen);
                      }}
                      style={{ color: "black" }}
                      className={`drawer-btn ${
                        mode === "light" && "drawer-btn-light"
                      }`}
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
            <Footer />
          </Router>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
