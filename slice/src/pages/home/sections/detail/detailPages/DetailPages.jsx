import React from 'react'
import styles from './DetailPages.module.scss'
import { useLocation } from 'react-router-dom'

const DetailPages = () => {
    const location = useLocation()

    const item = location.state?.item
  return (
    <div>
        {item ? (
            <div>
                <img src={item.image} alt="" />
                <p>{item.price}</p>
                <p>{item.title}</p>
            </div>
        ) : <h1>Melumat Yoxdur</h1>
        }
    </div>
  )
}

export default DetailPages