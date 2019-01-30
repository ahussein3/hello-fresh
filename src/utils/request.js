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

  static setRecipes() {
    return localStorage.setItem('recipes', JSON.stringify(RECIPES));
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

        return reject(new Error('Could not get recipe'));
      }, DELAY);
    });
  }
}

export default RecipesApi;
