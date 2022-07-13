import React from 'react'
import ImgScroll from '../components/ImgScroll.js';

const imgArray = [];


function Maison() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Maison;
