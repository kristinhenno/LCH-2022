import React from 'react'
import ImgScroll from '../components/ImgScroll.js';

const imgArray = [];


function Bungalow() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Bungalow;
