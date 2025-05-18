import mongoose from "mongoose";


export const productSchema = mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String},
}, {timestamps:true})


const productItem = mongoose.model("product", productSchema)

export default productItem