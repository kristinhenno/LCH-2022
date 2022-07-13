import React from 'react'
import ImgScroll from '../components/ImgScroll.js';
import img0 from '../images/press/Ch/0.jpg';
import img1 from '../images/press/Ch/1.jpg';
import img2 from '../images/press/Ch/2.jpg';
import img3 from '../images/press/Ch/3.jpg';
import img4 from '../images/press/Ch/4.jpg';


const imgArray = [img0, img1, img2, img3, img4];


function Ch() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Ch;
