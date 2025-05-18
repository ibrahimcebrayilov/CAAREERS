import React from 'react'
import styles from './AdimCard.module.scss'

const AdimCard = ({item, deleteItem, }) => {
  return (
 

      
 <tr>
            <td><img src={item.image} alt="" /></td>
            <td><p>{item.title}</p></td>
            <td><p>{item.price}</p></td>
            <td><button onClick={deleteItem}>SIL</button></td>
        </tr>
   
       
   
  )
}

export default AdimCard