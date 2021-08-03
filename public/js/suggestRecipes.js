console.log("Script running");

const unirest = require('unirest');

const API_KEY = "1d737f1d70534d378bdcbc673648ef6e";
let apiRequestURL = "?apiKey=" + API_KEY
const INGREDIENT_LIST = ['bananas', 'apples', 'cheese', 'crackers']; //replace ingredients list with input
let baseString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/"; //base string for all request URLs

//
//
//
//
//find recipes from ingredients list:
// let recipeFinderString = baseString + "recipes/find" + "ByIngredients?number=5&ranking=1&ingredients=";
let recipeFinderString = baseString + "recipes/findByIngredients" + apiRequestURL + "&number=5&ranking=1&ingredients=";


const ingredientsString = INGREDIENT_LIST.map(ingredient =>
   ingredient + '%2C'
);

recipeFinderString = recipeFinderString + ingredientsString;

unirest.get(recipeFinderString)
.header("1d737f1d70534d378bdcbc673648ef6e",  API_KEY)
.end(function (result) {
   if (result.status === 200){
       getRecipeData(result.body);
   };
}); 

javascript fetch(recipeFinderString) .then(response => response.json()) .then(myjson => { console.log(myjson); });