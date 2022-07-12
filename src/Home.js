import React from 'react'
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import image1 from './images/homepage/1.jpg'
import image2 from './images/homepage/2.jpg'
import image3 from './images/homepage/3.jpg'



const useStyles = makeStyles(() => ({
    homeImage: {
        height: '100vh',
        margin: '0 0 -0.3% 0',
        padding: '0',
        position: 'relative'
    },
}))


function Home() {
    const classes = useStyles();
    return (
        <div>
            <img className={classes.homeImage} src={image1} />
            <img className={classes.homeImage} src={image2} />
            <img className={classes.homeImage} src={image3} />
        </div>
    )
}

export default Home;
