import React from 'react'
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import image1 from './images/homepage/1.jpg'
import image2 from './images/homepage/2.jpg'
import image3 from './images/homepage/3.jpg'



const useStyles = makeStyles(() => ({
    homeImage: {
        height: '100vh',
        width: '100vw',
        overflowX: 'hidden',
        margin: '0 0 -0.3% 0',
        padding: '0',
        // position: 'static',
        // top: 0,
        // left: 0
    },

    imgCont: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0
    }
}))


function Home() {
    const classes = useStyles();
    return (
        <div className={classes.imgCont}>
            <img className={classes.homeImage} src={image1} />
            <img className={classes.homeImage} src={image2} />
            <img className={classes.homeImage} src={image3} />
        </div>
    )
}

export default Home;
