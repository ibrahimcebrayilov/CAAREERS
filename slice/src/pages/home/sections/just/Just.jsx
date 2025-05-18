import React from 'react'
import style from './Just.module.scss'
import { FaRegHeart } from "react-icons/fa";
import { BsEmojiWink } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

const Just = () => {
    return (
        <div className={style.content}>
            <h1>ABOUT US</h1>
            <div className={style.cards}>
                <div className={style.card}>
                    <a href=""><FaRegHeart /></a>
                    <h3>MADE WITH LOVE</h3>
                    <p>Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.</p>
                </div>
                <div className={style.card}>
                    <BsEmojiWink />
                    <h3>MADE WITH LOVE</h3>
                    <p>Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.</p>
                </div>
                <div className={style.card}>
                    <FiSun />
                    <h3>MADE WITH LOVE</h3>
                    <p>Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.</p>
                </div>

            </div>


        </div>
    )
}

export default Just