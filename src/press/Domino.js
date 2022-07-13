import React from 'react'
import ImgScroll from '../components/ImgScroll.js';
import img1 from '../images/press/Domino/1.jpg';
import img2 from '../images/press/Domino/2.jpg';
import img3 from '../images/press/Domino/3.jpg';
import img4 from '../images/press/Domino/4.jpg';
import img5 from '../images/press/Domino/5.jpg';
import img6 from '../images/press/Domino/6.jpg';


const imgArray = [img1, img2, img3, img4, img5, img6];



function Domino() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Domino;
