import React from 'react'
import img1 from '../images/portfolio/casita/1.jpg';
import img2 from '../images/portfolio/casita/2.jpg';
import img3 from '../images/portfolio/casita/3.jpg';
import img4 from '../images/portfolio/casita/4.jpg';
import img5 from '../images/portfolio/casita/5.jpg';
import img6 from '../images/portfolio/casita/6.jpg';
import img7 from '../images/portfolio/casita/7.jpg';
import img8 from '../images/portfolio/casita/8.jpg';
import img9 from '../images/portfolio/casita/9.jpg';
import img10 from '../images/portfolio/casita/10.jpg';
import img11 from '../images/portfolio/casita/11.jpg';
import img12 from '../images/portfolio/casita/12.jpg';
import img13 from '../images/portfolio/casita/13.jpg';
import img14 from '../images/portfolio/casita/14.jpg';
import img15 from '../images/portfolio/casita/15.jpg';
import img16 from '../images/portfolio/casita/16.jpg';
import img17 from '../images/portfolio/casita/17.jpg';
import img18 from '../images/portfolio/casita/18.jpg';
import img19 from '../images/portfolio/casita/19.jpg';
import img20 from '../images/portfolio/casita/20.jpg';
import img21 from '../images/portfolio/casita/21.jpg';
import img22 from '../images/portfolio/casita/22.jpg';
import img23 from '../images/portfolio/casita/23.jpg';
import img24 from '../images/portfolio/casita/24.jpg';
import img25 from '../images/portfolio/casita/25.jpg';
import img26 from '../images/portfolio/casita/26.jpg';
import img27 from '../images/portfolio/casita/27.jpg';
import ImgScroll from '../components/ImgScroll.js';

const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27]


function Casita() {
    return (
        <div>
            {ImgScroll(imgArray)}
        </div>

    )
}

export default Casita;
