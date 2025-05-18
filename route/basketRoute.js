import express from "express"
import { deleteBasket, getBaskets, postBaskets } from "../controller/basketController.js"
const router =express.Router()
router.route("/")
.get(getBaskets)
.post(postBaskets)
router.route("/:id")
.delete(deleteBasket)
export default router