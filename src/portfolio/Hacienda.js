import React from 'react'
import ImgScroll from '../components/ImgScroll.js';

const imgArray = [];


function Hacienda() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Hacienda;
