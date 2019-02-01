// Define reducer function for Course and course related actions.
import * as actions from './actionTypes';

const initialState = {
  recipes: [],
  recipe: {},
  loading: false,
  loaded: false
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD: {
      return { ...state, loading: true };
    }

    case actions.LOAD_RECIPES_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        recipes: action.recipes
      };
    }

    case actions.LOAD_RECIPE_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        recipe: action.recipe
      };
    }

    case actions.REFRESH: {
      return {
        loading: false,
        loaded: false
      };
    }

    case actions.DELETE_RECIPE: {
      const { recipeId } = action;
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
      };
    }

    default:
      return state;
  }
};

export default recipesReducer;
