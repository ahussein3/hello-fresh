import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import module reducers
import recipesReducer from '../modules/Recipes/store/reducer';

export default combineReducers({
  form: formReducer,
  recipes: recipesReducer
});
