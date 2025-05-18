import express from "express"
import { deleteProduct, getProducts, postProducts } from "../controller/productController.js"
const router =express.Router()
router.route("/")
.get(getProducts)
.post(postProducts)
router.route("/:id")
.delete(deleteProduct)
export default router