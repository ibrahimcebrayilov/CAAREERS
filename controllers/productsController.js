import ProductsItem from "../models/productsModel.js"


const getProducts = async(req, res) => {
    const products = await ProductsItem.find()
    res.json(products)
}

const postProducts = async(req, res) => {
    const newProducts = req.body
    await ProductsItem.create(newProducts)
    res.json(newProducts)
}

const deleteProducts = async(req, res) => {
    const{id} = req.params
    await ProductsItem.findByIdAndDelete(id)
    res.json('data silindi')
}


export {getProducts, postProducts, deleteProducts}