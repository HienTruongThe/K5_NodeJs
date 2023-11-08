import { Router } from 'express';
import { AllProduct, deleteProduct, getDetailProduct } from '../controllers/AllProduct'
import { HomePage } from './HomePage';
import { Categories } from './Categories';

const router = Router()
router.get("/", HomePage)
router.get('/products', AllProduct)
router.get('/products/:id', getDetailProduct)
router.delete('/products/:id', deleteProduct);
router.get('/categories', Categories)

export default router;