import React from 'react'
import ImgScroll from '../components/ImgScroll.js';

const imgArray = [];


function Cabana() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Cabana;
