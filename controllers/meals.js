import { Meal } from "../models/meal.js"

function index(req, res) {
  Meal.find({})
  .then(meals => {
    res.render('meals/index', {
      meals: meals
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newMeal(req, res) {
  res.render('meals/new')
}

function create(req, res) {
  req.body.ingredients = req.body.ingredients.split(', ')
  Meal.create(req.body)
  .then(meal => {
    res.redirect('/meals')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}



export {
  index,
  newMeal as new,
  create
}