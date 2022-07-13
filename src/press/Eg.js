import React from 'react'
import ImgScroll from '../components/ImgScroll.js';

import img1 from '../images/press/Eg/1.jpg';
import img2 from '../images/press/Eg/2.jpg';
import img3 from '../images/press/Eg/3.jpg';
import img4 from '../images/press/Eg/4.jpg';
import img5 from '../images/press/Eg/5.jpg';
import img6 from '../images/press/Eg/6.jpg';
import img7 from '../images/press/Eg/7.jpg';
import img8 from '../images/press/Eg/8.jpg';
import img9 from '../images/press/Eg/9.jpg';
import img10 from '../images/press/Eg/10.jpg';
import img11 from '../images/press/Eg/11.jpg';
import img12 from '../images/press/Eg/12.jpg';
import img13 from '../images/press/Eg/13.jpg';
import img14 from '../images/press/Eg/14.jpg';
import img15 from '../images/press/Eg/15.jpg';
import img16 from '../images/press/Eg/16.jpg';



const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];


function Eg() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Eg;
