import React from 'react'
import styles from './ProductsCard.module.scss'
import { useNavigate } from 'react-router-dom'

const ProductsCards = ({item, AddBasket, }) => {


  const navigation = useNavigate()

  const goDetail = (item) => {
    navigation('/detail', {state:{item}})
  }
  return (
    <div className={styles.card}>
        <img onClick={() => goDetail(item)} src={item.image} alt="" />
        <p>{item.title}</p>
        <p>{item.price}</p>
        <button onClick={AddBasket}>ADD BASKET</button>
    </div>
  )
}

export default ProductsCards 