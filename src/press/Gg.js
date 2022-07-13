import React from 'react'
import ImgScroll from '../components/ImgScroll.js';

import img1 from '../images/press/Gg/1.jpg';
import img2 from '../images/press/Gg/2.jpg';
import img3 from '../images/press/Gg/3.jpg';
import img4 from '../images/press/Gg/4.jpg';
import img5 from '../images/press/Gg/5.jpg';
import img6 from '../images/press/Gg/6.jpg';
import img7 from '../images/press/Gg/7.jpg';
import img8 from '../images/press/Gg/8.jpg';




const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8];


function Gg() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Gg;
