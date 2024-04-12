import { Router } from 'express'
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

// GET localhost:3000/meals
router.get('/', mealsCtrl.index)

export { router }
