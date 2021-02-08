import express from 'express'
import { getProducts, getProductById } from './productController.js'

const router = express.Router()

// GET Product Routes
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router
