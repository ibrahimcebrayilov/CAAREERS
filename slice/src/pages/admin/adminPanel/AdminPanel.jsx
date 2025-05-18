
import styles from './AdminPanel.module.scss'
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductsThunk, getProductsThunk, postProductsThunk } from '../../../redux/reducers/productsSlice';
import AdimCard from '../../../components/common/cards/adimCard/AdimCard';
import { deleteBasketThunk } from '../../../redux/reducers/basketSlice';

const AdminPanel = () => {

   const [text, setText] = useState('')
   const [sort, setSort] = useState('asc')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    
    
    const products = useSelector((state) => state.products.products) || []
    const error = useSelector((state) => state.products.error) 
    const loading = useSelector((state) => state.products.loading) 

    const filtrerdProduct = products
    .filter(product => product.title.toLowerCase().includes(text.toLocaleLowerCase()))
    .sort((a, b) => {
      return sort === 'asc' ? a.price - b.price : b.price - a.price;
    });

    const formik = useFormik({
        initialValues: {
          image: '',
          title: '',
          price: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          dispatch(postProductsThunk(values))
        },
      });

      const deleteItem = (id) => {
        dispatch(deleteProductsThunk(id))
        dispatch(deleteBasketThunk(id))
      }

      
    if (error) return <h1>Xeta Bas verdi</h1>
    if (loading) return <h1>Yuklenir....</h1>
  return (
    <div className={styles.admin}>
         <form onSubmit={formik.handleSubmit}>
       <label htmlFor="image">image</label>
       <input
         id="image"
         name="image"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.image}
       />
       <label htmlFor="title">Last Name</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       <label htmlFor="price">price</label>
       <input
         id="price"
         name="price"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       <button type="submit">Submit</button>
     </form>
     <div className={styles.btns}>
      <button onClick={() => setSort('asc')}>coxdan aza</button>
      <button onClick={() => setSort('dasc')}>azdan coxa</button>
     </div>
     <input type="text" placeholder='search' name='' id='' onChange={(e) => setText(e.target.value)} />
     <table>
        <thead>
            <tr>
                <th>IMAGE</th>
                <th>TİTLE</th>
                <th>PRİCE</th>
                <th>SİL</th>
            </tr>
        </thead>
        <tbody>
            {filtrerdProduct && filtrerdProduct.map((item )=> <AdimCard item= {item} deleteItem= {() => deleteItem(item._id)} />)}
        </tbody> 
     </table>
    </div>
  )
}

export default AdminPanel