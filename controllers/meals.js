import { Meal } from "../models/meal.js"

function index(req, res) {
  Meal.find({})
  .then(meals => {
    console.log(meals)
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

function show(req, res) {
  Meal.findById(req.params.mealId)
  .then(meal => {
    res.render('meals/show', {
      meal: meal
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}



export {
  index,
  newMeal as new,
  create,
  show
}