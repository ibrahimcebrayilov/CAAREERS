import React, { useEffect } from 'react'
import styles from './ProductsSec.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../../../../redux/reducers/productsSlice'
import { postBasketThunk } from '../../../../redux/reducers/basketSlice'
import ProductsCards from '../../../../components/common/cards/productsCard/ProductsCards'
import { useNavigate } from 'react-router-dom'

const ProductsSec = () => {
    const navigation = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProductsThunk())
    }, [])

    const products = useSelector((state) => state.products.products) || []
    const error = useSelector((state) => state.products.error) 
    const loading = useSelector((state) => state.products.loading) 



    const AddBasket = (item) => {
        dispatch(postBasketThunk(item))
    }
   

    if (error) return <h1>Xeta Bas verdi</h1>
    if (loading) return <h1>Yuklenir....</h1>
  return (
    <div className={styles.section}>
        <div className={styles.cards}>
            {products && products.map((item) => <ProductsCards item={item} AddBasket ={() => AddBasket(item)}   />)}
        </div>
    </div>
  )
}

export default ProductsSec