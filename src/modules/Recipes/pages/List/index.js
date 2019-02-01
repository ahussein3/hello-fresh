import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { LoadComponent, RefreshComponent } from 'HOC';
import { loadRecipes, refresh, deleteRecipe } from '../../store/actions';
import RecipeList from './components/RecipeList';

const mapStateToProps = state => {
  const {
    recipes: { loading, loaded, recipes }
  } = state;

  return {
    loading,
    loaded,
    recipes
  };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { load: loadRecipes, refresh, deleteRecipe }
  ),
  LoadComponent,
  RefreshComponent
)(RecipeList);
