import image1 from './images/homepage/1.jpg'
import image2 from './images/homepage/2.jpg'
import image3 from './images/homepage/3.jpg'
import React, { useState, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import styles from "./styles.module.css";


const slides = [
    image1, image2, image3
]

export default function Home() {
    // const [index, set] = useState(0)
    // const transitions = useTransition(index, {
    //     key: index,
    //     from: { opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 },
    //     config: { duration: 3000 },
    // })
    // useEffect(() => {
    //     const t = setInterval(() => set(state => (state + 1) % slides.length), 4000)
    //     return () => clearTimeout(t)
    // }, [])
    return (
        <div className="flex fill center">
            <img src={image1} />
            {/* {transitions((style, i) => (
                <animated.div
                    className={styles.bg}
                    style={{
                        ...style,
                        backgroundImage: `url(${slides[i]})`,
                    }}
                />
            ))} */}
        </div>
    )
}
