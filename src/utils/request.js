import uuidv1 from 'uuid/v1';
import RECIPES from './recipes';
const DELAY = 1000;

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

class RecipesApi {
  static getRecipes() {
    const recipes = localStorage.getItem('recipes');
    return JSON.parse(recipes);
  }

  static setRecipes(recipes) {
    const recipesList = recipes || RECIPES;
    return localStorage.setItem('recipes', JSON.stringify(recipesList));
  }

  static getAllRecipes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], this.getRecipes()));
      }, DELAY);
    });
  }

  static getRecipe(recipeId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const recipes = this.getRecipes() || [];

        const recipe = recipes.filter(recipe => recipe.id === recipeId);

        if (recipe.length) {
          return resolve(Object.assign({}, recipe[0]));
        }

        return reject('Could not get recipe');
      }, DELAY);
    });
  }

  static saveRecipe(recipe) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const recipes = this.getRecipes() || [];

        if (recipe.id) {
          const existingRecipeIndex = recipes.findIndex(
            a => a.id === recipe.id
          );
          recipes.splice(existingRecipeIndex, 1, recipe);
        } else {
          //Just simulating creation here.
          //The server would generate ids new recipes in a real app.
          recipe.id = uuidv1();
          recipes.push(recipe);
        }

        this.setRecipes(recipes);

        resolve(Object.assign({}, recipe));
      }, DELAY);
    });
  }

  static deleteRecipe(recipeId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const recipes = this.getRecipes() || [];

        const indexOfRecipeToDelete = recipes.findIndex(recipe => {
          return recipe.id === recipeId;
        });
        recipes.splice(indexOfRecipeToDelete, 1);

        this.setRecipes(recipes);
        resolve();
      }, DELAY);
    });
  }
}

export default RecipesApi;
