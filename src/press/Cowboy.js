import React from 'react'
import ImgScroll from '../components/ImgScroll.js';
import img1 from '../images/press/Cowboy/1.jpg';
import img2 from '../images/press/Cowboy/2.jpg';
import img3 from '../images/press/Cowboy/3.jpg';
import img4 from '../images/press/Cowboy/4.jpg';
import img5 from '../images/press/Cowboy/5.jpg';


const imgArray = [img1, img2, img3, img4, img5];

function Cowboy() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Cowboy;
