import React from 'react'
import ImgScroll from '../components/ImgScroll.js';

import img1 from '../images/press/Sbls2/1.png';
import img2 from '../images/press/Sbls2/2.png';
import img3 from '../images/press/Sbls2/3.png';
import img4 from '../images/press/Sbls2/4.png';
import img5 from '../images/press/Sbls2/5.png';
import img6 from '../images/press/Sbls2/6.png';
import img7 from '../images/press/Sbls2/7.png';


const imgArray = [img1, img2, img3, img4, img5, img6, img7];


function Sbls2() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Sbls2;
