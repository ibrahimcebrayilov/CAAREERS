import React from 'react'
import styles from './Header.module.scss'
import { useNavigate } from 'react-router-dom'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const navigation = useNavigate()

  const goBasket = () => {
    navigation('/basket')
  }
  const goHome = () => {
    navigation('/')
  }
  const goAdmin = () => {
    navigation('/admin')
  }

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (

    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/logo1-2-96x96.png" alt="" />
          <h1>NATURAL COSMETIC</h1>
        </div>
        <div className={styles.navbar}>
          <ul>
            <li><a onClick={goHome} href="">Home</a></li>
            <li><a onClick={goBasket} href="">Basket</a></li>
            <li><a onClick={goAdmin} href="">Admin Panel</a></li>
          </ul>
        </div>
        <div className={styles.menu}>
          <button onClick={toggleDrawer}><GiHamburgerMenu /></button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            className='bla bla bla'
          >
            <div className={styles.menuNav}>
              <ul>
                <li><a onClick={goHome} href="">Home</a></li>
                <li><a onClick={goBasket} href="">Basket</a></li>
                <li><a onClick={goAdmin} href="">Admin Panel</a></li>
              </ul>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  )
}

export default Header