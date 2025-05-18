import React from 'react'
import Layout from '../../components/common/layout/Layout'
import Contact from './sections/contact/Contact'
import Hero from './sections/hero/Hero'
import Just from './sections/just/Just'
import Mission from './sections/mission/Mission'
import ProductsSec from './sections/productsSec/ProductsSec'

const Home = () => {
  return (
   <Layout>
    <Hero/>
    <ProductsSec/>
    <Just/>
    <Mission/>
    <Contact/>
   </Layout>
  )
}

export default Home