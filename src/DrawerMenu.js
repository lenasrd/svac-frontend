import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DataUsageIcon from "@material-ui/icons/DataUsage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import ProjectPage from './pages/ProjectPage'
import LimitationsPage from './pages/LimitationsPage'
import AuthorsVisualizationPage from "./pages/AuthorsVisualizationPage";

const drawerWidth = 240;

const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#001B48',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    logo: {
        margin: '0.5em',
        fontSize: '2em',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));


export default function DrawerMenu() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <h1 component={Link} to={"/project"}>Project SVAC</h1>
                        <DataUsageIcon className={classes.logo}/>
                    </Toolbar>
                </AppBar>
                <Router>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}>
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                <ListItem key="About">
                                    <h2 primary="About">About</h2>
                                </ListItem>
                                <ListItem button className={classes.nested} component={Link} to={"/project"}>
                                    <ListItemText primary="Project" />
                                </ListItem>
                                <ListItem button className={classes.nested} component={Link} to={"/limitations"}>
                                    <ListItemText primary="Limitations" />
                                </ListItem>

                                <ListItem key="Visualizations">
                                    <h2>Visualizations</h2>
                                </ListItem>
                                <ListItem button className={classes.nested} component={Link} to={"/authors-visualizations"}>
                                    <ListItemText primary="Authors" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Universities" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Keywords" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Downloads" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Keywords" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Abstract" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Specialization" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Paper meta" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Book meta" />
                                </ListItem>
                            </List>
                        </div>
                    </Drawer>
                    <main className={classes.content}>
                        <Route exact path="/project" component={ProjectPage} />
                        <Route exact path="/limitations" component={LimitationsPage} />
                        <Route exact path="/authors-visualizations" component={AuthorsVisualizationPage} />
                    </main>
                </Router>
            </div>
        </ThemeProvider>
    );
}