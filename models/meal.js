import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mealSchema = new Schema({
  name: String,
  type: {type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack']},
  ingredients: [String],
  instructions: String,
  photo: String
}, {
  timestamps: true
})

const Meal = mongoose.model('Meal', mealSchema)

export {
  Meal
}