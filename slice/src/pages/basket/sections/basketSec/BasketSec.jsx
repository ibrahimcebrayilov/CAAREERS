import React, { useEffect } from 'react'
import styles from './BasketSec.module.scss'
import { deleteBasketThunk, getBasketThunk } from '../../../../redux/reducers/basketSlice'
import { useDispatch, useSelector } from 'react-redux'
import BasketCard from '../../../../components/common/cards/basketCard/BasketCard'

const BasketSec = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getBasketThunk())
    }, [])

    const basket = useSelector((state) => state.basket. basket) || []
    const error = useSelector((state) => state.basket.error) 
    const loading = useSelector((state) => state.basket.loading) 



    const DeleteBasket = (id) => {
        dispatch(deleteBasketThunk(id))
    }


    if (error) return <h1>Xeta Bas verdi</h1>
    if (loading) return <h1>Yuklenir....</h1>
  return (
    <div className={styles.section}>
    <div className={styles.cards}>
        {basket && basket.map((item) => <BasketCard item={item} DeleteBasket ={() => DeleteBasket(item._id)} />)}
    </div>
</div>
  )
}

export default BasketSec