import React from 'react'
import ImgScroll from '../components/ImgScroll.js';

import img1 from '../images/press/Micasa/1.jpg';
import img2 from '../images/press/Micasa/2.jpg';
import img3 from '../images/press/Micasa/3.jpg';
import img4 from '../images/press/Micasa/4.jpg';
import img5 from '../images/press/Micasa/5.jpg';
import img6 from '../images/press/Micasa/6.jpg';
import img7 from '../images/press/Micasa/7.jpg';
import img8 from '../images/press/Micasa/8.jpg';
import img9 from '../images/press/Micasa/9.jpg';
import img10 from '../images/press/Micasa/10.jpg';
import img11 from '../images/press/Micasa/11.jpg';




const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];


function Micasa() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Micasa;
