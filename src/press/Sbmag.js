import React from 'react'
import ImgScroll from '../components/ImgScroll.js';

import img1 from '../images/press/Sbmag/1.jpg';
import img2 from '../images/press/Sbmag/2.jpg';



const imgArray = [img1, img2];


function Sbmag() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Sbmag;
