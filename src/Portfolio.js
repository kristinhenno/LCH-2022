import React from 'react'
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import boho from './images/portfolioCovers/boho.jpg'
import bungalow from './images/portfolioCovers/bungalow.jpg'
import cabana from './images/portfolioCovers/cabana.jpg'
import casita from './images/portfolioCovers/casita.jpg'
import hacienda from './images/portfolioCovers/hacienda.jpg'
import maison from './images/portfolioCovers/maison.jpg'
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
    container: {
        position: 'relative',
        display: 'inline-block',
        margin: '0 1% 0 0',
        '&:hover': {
            cursor: 'pointer',
            '& $img': {
                opacity: '0.3'
            },
            '& $middle': {
                opacity: '1'
            }
        },
    },
    containerLast: {
        position: 'relative',
        display: 'inline-block',
        margin: '0',
        '&:hover': {
            cursor: 'pointer',
            '& $img': {
                opacity: '0.3',
            },
            '& $middle': {
                opacity: '1'
            }
        },
    },
    middle: {
        transition: '.5s ease',
        opacity: '0',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    }
}))


function PortfolioContainer() {
    const classes = useStyles();
    return (
        <div className={classes.scrollMenu}>
            <Link className={classes.link} to="/portfolio/casita">
                <div className={classes.container}>
                    <img className={classes.img} src={casita} />
                    <div className={classes.middle}>
                        <div className={classes.text}>Casita Blanquita</div>
                    </div>
                </div>
            </Link>
            <div className={classes.container}>
                <img className={classes.img} src={bungalow} />
                <div className={classes.middle}>
                    <div className={classes.text}>Lauren's Bungalow</div>
                </div>
            </div>
            <div className={classes.container}>
                <img className={classes.img} src={maison} />
                <div className={classes.middle}>
                    <div className={classes.text}>Eclectic Maison</div>
                </div>
            </div>
            <div className={classes.container}>
                <img className={classes.img} src={boho} />
                <div className={classes.middle}>
                    <div className={classes.text}>Boho Casa</div>
                </div>
            </div>
            <div className={classes.container}>
                <img className={classes.img} src={cabana} />
                <div className={classes.middle}>
                    <div className={classes.text}>Summer Cabana</div>
                </div>
            </div>
            <div className={classes.containerLast}>
                <img className={classes.img} src={hacienda} />
                <div className={classes.middle}>
                    <div className={classes.text}>Santa Fe Hacienda</div>
                </div>
            </div>
        </div>

    )
}

export default PortfolioContainer;
