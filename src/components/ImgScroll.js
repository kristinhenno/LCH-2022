import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { scroller, img } from '../styles.js'


const useStyles = makeStyles(() => ({
    scrollMenu: scroller,
    img: img,
    link: {
        textDecoration: 'none',
        color: 'black'
    }
}))

const ImgScroll = (images) => {
    const classes = useStyles();

    return (
        <div className={classes.scrollMenu}>
            {images.map((image) => (
                <img key={image} className={classes.img} src={image} />
            ))}
        </div>
    )
};


export default ImgScroll;