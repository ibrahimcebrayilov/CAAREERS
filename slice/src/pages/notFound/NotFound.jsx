import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigation = useNavigate()

    const goNotFound = () =>{
        navigation(-1)
    }
  return (
    <div>
        <h1>NOT FOUND</h1>
        <button onClick={goNotFound}>GO BACK</button>
    </div>
  )
}

export default NotFound