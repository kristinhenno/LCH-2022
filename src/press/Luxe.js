import React from 'react'
import ImgScroll from '../components/ImgScroll.js';

import img1 from '../images/press/Luxe/0.jpg';
import img2 from '../images/press/Luxe/1.jpg';



const imgArray = [img1, img2]


function Luxe() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Luxe;
