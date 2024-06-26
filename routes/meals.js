import { Router } from 'express'
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

// GET localhost:3000/meals
router.get('/', mealsCtrl.index)

// GET localhost:3000/meals/new
router.get('/new', mealsCtrl.new)

// GET localhost:3000/meals/:mealId
router.get('/:mealId', mealsCtrl.show)

// POST localhost:3000/meals
router.post('/', mealsCtrl.create)

export { router }
