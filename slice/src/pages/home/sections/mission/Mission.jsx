import React from 'react'
import style from './Mission.module.scss'

const Mission = () => {
    return (
        <div className={style.container}>
            <div className={style.imgs}>
                <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/image1.jpg" alt="" />
            </div>
            <div className={style.text}>
                <h1>Devoted to <br /> wonderful beauty</h1>
                <p>With 30-minute premium treat</p>
                <p>Phasellus faucibus vehicula rutrum in ante ligula vel arcu quis lacinia posuere metus eget ligula ipsum maximus lobortis nec imperdiet.</p>
                <button>Read More</button>
            </div>

        </div>
    )
}

export default Mission