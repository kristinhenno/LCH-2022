import React from 'react'
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import image1 from '../images/homepage/1.jpg'
import image2 from '../images/homepage/2.jpg'
import image3 from '../images/homepage/3.jpg'



const useStyles = makeStyles(() => ({
    homeImage: {
        // height: '100vh',
        // // width: '100vw',
        // overflowX: 'hidden',
        // margin: '0 0 -0.3% 0',
        // padding: '0',
        // minWidth: '100',
        // minHeight: 10
    },

    imgCont: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // zIndex: 0,
        backgroundImage: `url(${image1})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-64.5px'
    },
    imgCont2: {
        backgroundImage: `url(${image2})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    imgCont3: {
        backgroundImage: `url(${image3})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}))


function Home() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.imgCont}>
                {/* <img className={classes.homeImage} src={image1} />
            <img className={classes.homeImage} src={image2} />
            <img className={classes.homeImage} src={image3} /> */}
            </div>
            <div className={classes.imgCont2}>
            </div>
            <div className={classes.imgCont3}>

            </div>
        </div>
    )
}

export default Home;
