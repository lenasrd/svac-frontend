import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import logo_white from "./logo_white.png";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import ProjectPage from "./pages/ProjectPage";
import LimitationsPage from "./pages/LimitationsPage";
import VisualizationAuthorsPage from "./pages/VisualizationAuthorsPage";
import VisualizationCountriesCitiesPage from "./pages/VisualizationCountriesCitiesPage";
import VisualizationKeywordsPage from "./pages/VisualizationKeywordsPage";
import VisualizationPaperMetaDataPage from "./pages/VisualizationPaperMetaDataPage";
import VisualizationPricingPage from "./pages/VisualizationPricingPage";
import VisualizationUniversitiesPage from "./pages/VisualizationUniversitiesPage";

import { Typography } from "@material-ui/core";

const drawerWidth = 240;

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#2a2a2a",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
  typography: {
    h4: {
      marginBottom: "0.35em",
    },
    h5: {
      marginBottom: "0.35em",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
    marginTop: "6em",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: "6em",
  },
  logo: {
    height: "3em",
    marginTop: "1.5em",
    marginBottom: "1.5em",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  drawerHeadline: {
    fontWeight: "bold",
  },
}));

export default function DrawerMenu() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Router>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Link to="/project">
                <img
                  src={logo_white}
                  alt="VACS Logo"
                  className={classes.logo}
                />
              </Link>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerContainer}>
              <List>
                <ListItem key="About">
                  <ListItemText>
                    <Typography className={classes.drawerHeadline}>
                      About
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={Link}
                  to={"/project"}
                >
                  <ListItemText primary="Project" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={Link}
                  to={"/limitations"}
                >
                  <ListItemText primary="Limitations" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={Link}
                  to={"/imprint"}
                >
                  <ListItemText primary="Imprint" />
                </ListItem>

                <ListItem key="About">
                  <ListItemText>
                    <Typography className={classes.drawerHeadline}>
                      Visualizations
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={Link}
                  to={"/visualizations-authors"}
                >
                  <ListItemText primary="Authors" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={Link}
                  to={"/visualizations-countries-cities"}
                >
                  <ListItemText primary="Countries &amp; cities" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={Link}
                  to={"/visualizations-keywords"}
                >
                  <ListItemText primary="Keywords" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={Link}
                  to={"/visualizations-paper-meta-data"}
                >
                  <ListItemText primary="Paper meta data" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={Link}
                  to={"/visualizations-pricing"}
                >
                  <ListItemText primary="Pricing" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={Link}
                  to={"/visualizations-universities"}
                >
                  <ListItemText primary="Universities" />
                </ListItem>
              </List>
            </div>
          </Drawer>
          <main className={classes.content}>
            <Route exact path="/project" component={ProjectPage} />
            <Route exact path="/limitations" component={LimitationsPage} />
            <Route
              exact
              path="/visualizations-authors"
              component={VisualizationAuthorsPage}
            />
            <Route
              exact
              path="/visualizations-countries-cities"
              component={VisualizationCountriesCitiesPage}
            />
            <Route
              exact
              path="/visualizations-keywords"
              component={VisualizationKeywordsPage}
            />
            <Route
              exact
              path="/visualizations-paper-meta-data"
              component={VisualizationPaperMetaDataPage}
            />
            <Route
              exact
              path="/visualizations-pricing"
              component={VisualizationPricingPage}
            />
            <Route
              exact
              path="/visualizations-universities"
              component={VisualizationUniversitiesPage}
            />
            <Route exact path="/">
              <Redirect to="/project" />
            </Route>
          </main>
        </Router>
      </div>
    </ThemeProvider>
  );
}
