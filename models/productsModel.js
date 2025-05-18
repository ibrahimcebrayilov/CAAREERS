import mongoose from "mongoose";


export const productsSchema = mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String},
}, {timestamps:true})


const ProductsItem = mongoose.model("products", productsSchema)

export default ProductsItem