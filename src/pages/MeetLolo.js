import React from 'react'
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import loloPic from '../images/about/laurenchristinehenno.jpg'



const useStyles = makeStyles(() => ({
    aboutCont: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    aboutText: {
        flex: 6,
        marginLeft: '8%',
        marginRight: '5%',
        marginTop: '2%',
        fontSize: '2.5vh',
        lineHeight: 2.8,
        color: '#767777',
        letterSpacing: '2px',
        fontFamily: 'Quicksand! important',
    },
    loloImg: {
        flex: 4,
        marginRight: '8%'
    },
    loloPic: {
        height: '81vh',
    }
}))


function MeetLolo() {
    const classes = useStyles();
    return (
        <div className={classes.aboutCont}>
            <div className={classes.aboutText}> California based designer, Lauren Christine Henno, resides in charming
            Santa Barbara, California. Her design aesthetic is rooted in the beauty of
            California's Coastal Riviera. With a degree in Business Marketing from the
            University of San Diego and design studies at Florence University of the
            Arts, Lauren's experience and passion for both business and design have
            allowed her to establish her own boutique firm. She acquires design
            inspiration from her travels abroad, but always looks to her origins and
      the beauty of Santa Barbara's Mediterranean coast for influence.</div>

            <div className={classes.loloImg}><img className={classes.loloPic} src={loloPic} /></div>
        </div>
    )
}

export default MeetLolo;
