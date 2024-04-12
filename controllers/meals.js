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




export {
  index
}