import React from 'react'
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import { scroller, img } from './styles.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const useStyles = makeStyles(() => ({
    scrollMenu: scroller,
    img: img,
    link: {
        textDecoration: 'none',
        color: 'black'
    }
}))


function PortfolioContainer() {
    const classes = useStyles();
    return (
        <div className={classes.scrollMenu}>
            casita
        </div>

    )
}

export default PortfolioContainer;
