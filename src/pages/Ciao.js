import React from 'react'
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import ciaoPic from '../images/ciao/desk_web.jpg'
import houzz from '../images/ciao/houzz.png'
import insta from '../images/ciao/instagram.png'
import mail from '../images/ciao/mail.png'
import pinterest from '../images/ciao/pinterest.png'



const useStyles = makeStyles(() => ({
    ciaoCont: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ciaoText: {
        // marginRight: '5%',
        marginTop: '2%',
        fontSize: '0.8em',
        lineHeight: 2.8,
        color: '#767777',
        letterSpacing: '0.3px',
        fontFamily: 'Quicksand! important',
        fontWeight: 500
        // marginRight: '8%'
    },
    ciaoImg: {
        flex: 6,
        marginLeft: '8%',
        textAlign: 'left',

    },
    ciaoPic: {
        height: '81vh',
    },
    textBox: {
        // display: 'flex',
        textAlign: 'left',
        // marginRight: '8%',
        marginLeft: '3%',
        flex: 4,
    },
    social: {
        display: 'flex',
        lineHeight: 2.8,
        marginTop: '2%',
    },
    socialIcon: {
        marginRight: '2.2%',
        cursor: 'pointer'
    },
    emailText: {
        textDecoration: 'none',
        cursor: 'pointer',
        color: '#767777',
    }
}))


function Ciao() {
    const classes = useStyles();
    return (
        <div className={classes.ciaoCont}>
            <div className={classes.ciaoImg}><img className={classes.ciaoPic} src={ciaoPic} /></div>
            <div className={classes.textBox}>
                <div className={classes.ciaoText}> + 1 &nbsp; 8 0 5 &nbsp; 6 9 8 &nbsp; 3 5 2 3</div>
                <div className={classes.ciaoText}> <a className={classes.emailText} href="mailto: ciao@laurenchristinehenno.com"> c i a o @ l a u r e n c h r i s t i n e h e n n o . c o m </a></div>
                <div className={classes.ciaoText}>  s a n t a &nbsp; b a r b a r a, &nbsp; c a </div>
                <div className={classes.social}>
                    <a className={classes.socialIcon} target='_blank' href='https://www.instagram.com/laurenchristinehenno/'>
                        <img src={insta} />
                    </a>
                    <a target='_blank' className={classes.socialIcon} href='https://www.pinterest.com/laurenhenno/'>
                        <img src={pinterest} />
                    </a>
                    <a target='_blank' className={classes.socialIcon} href='https://www.houzz.com/professionals/interior-designers-and-decorators/lauren-christine-henno-pfvwus-pf~2115107692?'>
                        <img src={houzz} />
                    </a>
                    <a target='_blank' className={classes.socialIcon} href='mailto: ciao@laurenchristinehenno.com'>
                        <img src={mail} />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Ciao;
