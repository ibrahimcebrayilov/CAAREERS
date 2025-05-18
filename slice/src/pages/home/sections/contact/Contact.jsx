import React from 'react'
import style from './Contact.module.scss'

const Contact = () => {
    return (
        <div className={style.textcontent}>
            <div className={style.content}>
                <h2>CONTACT US</h2>
                <em>To get special offers to your email</em>
                <p>Amsterdam CA 90291</p>
                <p>email@site.com</p>
                <p>+1 (234) 56-78</p>
                @natural.cosmetic
            </div>
            <div className={style.contactForm}>
                <form action="">
                    <div className={style.text}>
                        <input type="text" placeholder='Name*' />
                        <input type="text" placeholder='Email*' />
                    </div>
                    <textarea placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
                    <button>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    )
}

export default Contact