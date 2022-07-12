import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import logo from './images/nav/laurenchristinehennologo.png'
import hamburger from './images/nav/hamburger2.png'
import x from './images/nav/close3.png'
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import InstagramFeed from './Instafeed';
import Home from './Home';
require('typeface-quicksand')



const useStyles = makeStyles(() => ({
    tab: {
        opacity: '0.85',
        zIndex: 1,
        position: 'relative',
    },
    hamburger: {
        width: '25px',
        paddingBottom: '18%'
    },

    x: {
        width: '15px',
        paddingBottom: '18%',
        marginLeft: '6px',
        position: 'relative'
    },
    hamburgerBox: {
        display: 'inline-block',
        boxShadow: '0 !important',
        zIndex: 1000000,
        position: 'relative'

    },
    logo: {
        width: '370px',
        margin: '1% 5% 0 10%'
    },
    navContainer: {
        textAlign: 'left',
        padding: '1.5% 3%',
        zIndex: 10000,
        position: 'fixed',
        top: 0,
        width: '100%'
    },
    list: {
        width: 250,

    },
    fullList: {
        width: 'auto',
    },

    tabText: {
        margin: '25% 0 0 2%',
        width: '280px'
    },

    navText: {
        fontFamily: 'Quicksand! important',
        margin: '2.6% 0',
        fontSize: '16px',
        color: 'black',
        fontWeight: '500',
        opacity: 1,
        zIndex: 100000000,

    },
    layout: {
    },
    logoDiv: {
        display: 'inline-block'
    }
}
))


function Nav() {
    const classes = useStyles();

    function TemporaryDrawer() {
        const classes = useStyles();
        const [state, setState] = React.useState({
            left: false
        });



        const toggleDrawer = (anchor, open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

        const list = (anchor) => (
            <div
                className={classes.tab}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List className={classes.tabText}>
                    <ListItem  >
                        <ListItemText><p className={classes.navText} > &nbsp; &nbsp; - m e e t &nbsp; l o l o </p></ListItemText>
                    </ListItem>
                    <br></br>
                    <ListItem >
                        <ListItemText className={classes.navText} ><p className={classes.navText} >  &nbsp; &nbsp; - p o r t f o l i o </p></ListItemText>
                    </ListItem>
                    <br></br>
                    <ListItem>
                        <ListItemText className={classes.navText}> <p className={classes.navText} > &nbsp; &nbsp; - b e f o r e &nbsp; & &nbsp; a f t  e r </p></ListItemText>
                    </ListItem>
                    <br></br>
                    <ListItem>
                        <ListItemText className={classes.navText}> <p className={classes.navText} > &nbsp; &nbsp;  - p r e s s</p></ListItemText>
                    </ListItem>
                    <br></br>
                    <ListItem>
                        <ListItemText className={classes.navText}>  <Link style={{ textDecoration: 'none' }} to="/insta"> <p className={classes.navText} >  &nbsp; &nbsp;  - i n s t a </p></Link></ListItemText>
                    </ListItem>
                    <br></br>
                    <ListItem>
                        <ListItemText className={classes.navText}> <p className={classes.navText} >  &nbsp; &nbsp;  - c i a o</p></ListItemText>
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div className={classes.hamburgerBox}>
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <div style={{ cursor: 'pointer', width: "25px" }}>
                            <img onClick={toggleDrawer(anchor, state.left ? false : true)} className={state.left ? classes.x : classes.hamburger} src={state.left ? x : hamburger} />
                        </div>
                        <Drawer elevation={0} className={classes.tab} anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        );
    }


    return (
        <div>
            <Router>
                <div className={classes.navContainer}>
                    <TemporaryDrawer />
                    <Link className={classes.logoDiv} to="/"><img className={classes.logo} src={logo} /></Link>
                </div>
                <div className={classes.layout}>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/insta">
                            <InstagramFeed />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div >
    );
}

export default Nav;