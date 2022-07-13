import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { scroller, img } from '../styles.js'
import {
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



const ImgScrollOverlay = (images) => {
    const classes = useStyles();
    return (
        <div className={classes.scrollMenu}>
            {images.map((project) => (

                <Link key={project.url} className={classes.link} to={project.url}>
                    <div className={classes.container}>
                        <img className={classes.img} src={project.image} />
                        <div className={classes.middle}>
                            <div className={classes.text}>{project.name}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
};


export default ImgScrollOverlay;