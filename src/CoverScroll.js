import React from 'react'
import { makeStyles, StylesProvider } from '@material-ui/core/styles';

const imageNames = ['10', '11', '12', '13', '14']


const useStyles = makeStyles(() => ({
    portfolio: {
        overflowX: 'scroll',
        overflowY: 'hidden',
        height: '80vh',
        backgroundColor: 'pink',
        display: 'flex'
    },
    image: {
        // display: 'inline-block'
        width: 'auto',
        height: '100%'
    }
}))

// function importAll(r) {
//     let images = [];
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }

// const images = importAll(require.context('./images/press/covers', false, /\.(png|jpe?g|svg)$/));


// const ImageDiv = () => {
//     return images.map((image, index) => (
//         <img src={image[index + '.jpg'].default} />
//     ))
// }

function CoverScroll() {
    const classes = useStyles();
    return (
        <div className="">
            <div className={classes.portfolio}>

                {imageNames.map((image, index) => {
                    return <img className={classes.image} src={require(`./images/press/covers/${image}.jpg`).default} />

                })}

            </div>
        </div>
    )
}

export default CoverScroll;
