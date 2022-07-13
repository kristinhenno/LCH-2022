import React from 'react'
import ImgScroll from '../components/ImgScroll.js';

import img1 from '../images/press/Sbls/1.jpg';
import img2 from '../images/press/Sbls/2.jpg';
import img3 from '../images/press/Sbls/3.jpg';
import img4 from '../images/press/Sbls/4.jpg';
import img5 from '../images/press/Sbls/5.jpg';





const imgArray = [img1, img2, img3, img4, img5];

function Sbls() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Sbls;
