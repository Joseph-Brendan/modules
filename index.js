import { sayMyColor, sayMybrand } from "./color.js"
import { sayMyFavFood, sayMyPet } from "./food.js"
import sayMyCountry from "./country.js"

let color = sayMyColor()
let food = sayMyFavFood()
let pet = sayMyPet()
let country = sayMyCountry()
let brand = sayMybrand()

console.log(color, food, pet, country, brand)