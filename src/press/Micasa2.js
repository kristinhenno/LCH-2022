import React from 'react'
import ImgScroll from '../components/ImgScroll.js';

import img1 from '../images/press/Micasa2/1.png';
import img2 from '../images/press/Micasa2/2.png';
import img3 from '../images/press/Micasa2/3.png';
import img4 from '../images/press/Micasa2/4.png';
import img5 from '../images/press/Micasa2/5.png';
import img6 from '../images/press/Micasa2/6.png';
import img7 from '../images/press/Micasa2/7.png';
import img8 from '../images/press/Micasa2/8.png';
import img9 from '../images/press/Micasa2/9.png';
import img10 from '../images/press/Micasa2/10.png';
import img11 from '../images/press/Micasa2/11.png';
import img12 from '../images/press/Micasa2/12.png';
import img13 from '../images/press/Micasa2/13.png';
import img14 from '../images/press/Micasa2/14.png';
import img15 from '../images/press/Micasa2/15.png';
import img16 from '../images/press/Micasa2/16.png';
import img17 from '../images/press/Micasa2/17.png';
import img18 from '../images/press/Micasa2/18.png';
import img19 from '../images/press/Micasa2/19.png';




const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19];


function Micasa2() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Micasa2;
