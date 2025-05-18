import React from 'react'
import style from './Hero.module.scss'

const Hero = () => {
    return (
        <div className={style.container}>
            <div className={style.text}>
                <h1>The view on <br /> refreshing</h1>
                <p>Phosfluorescently maintain impactful process.</p>
                <button>Read More</button>
            </div>
            <div className={style.imgs}>
                <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/image1.jpg" alt="" />
            </div>

        </div>
    )
}

export default Hero