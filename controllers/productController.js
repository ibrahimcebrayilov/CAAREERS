import productItem from "../models/productsModel.js"


const getProducts = async(req, res) => {
   try {
    const product = await productItem.find()
    res.json(product)
   } catch (err) {
    res.json("xeta bas verdi")
   }
}

const postProducts = async(req, res) => {
  try {
    const newProduct = req.body  
    await productItem.create(newProduct)
    res.json(newProduct)
  } catch (err) {
    res.json("xeta bas verdi" )
  }
}

const deleteProducts = async(req, res) => {
   try {
    const{id} = req.params
    await productItem.findByIdAndDelete(id)
    res.json("melumat silindi")
   } catch (err) {
    res.json("xeta bas verdi")
   }
}

export {getProducts, postProducts, deleteProducts}