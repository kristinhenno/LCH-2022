import React from 'react'
import ImgScroll from '../components/ImgScroll.js';

import img1 from '../images/press/Mydomaine/1.jpg';
import img2 from '../images/press/Mydomaine/2.jpg';
import img3 from '../images/press/Mydomaine/3.jpg';
import img4 from '../images/press/Mydomaine/4.jpg';
import img5 from '../images/press/Mydomaine/5.jpg';
import img6 from '../images/press/Mydomaine/6.jpg';
import img7 from '../images/press/Mydomaine/7.jpg';
import img8 from '../images/press/Mydomaine/8.jpg';
import img9 from '../images/press/Mydomaine/9.jpg';
import img10 from '../images/press/Mydomaine/10.jpg';
import img11 from '../images/press/Mydomaine/11.jpg';
import img12 from '../images/press/Mydomaine/12.jpg';
import img13 from '../images/press/Mydomaine/13.jpg';
import img14 from '../images/press/Mydomaine/14.jpg';
import img15 from '../images/press/Mydomaine/15.jpg';
import img16 from '../images/press/Mydomaine/16.jpg';
import img17 from '../images/press/Mydomaine/17.jpg';
import img18 from '../images/press/Mydomaine/18.jpg';
import img19 from '../images/press/Mydomaine/19.jpg';
import img20 from '../images/press/Mydomaine/20.jpg';



const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];


function Mydomaine() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Mydomaine;
