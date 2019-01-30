import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { LoadComponent, RefreshComponent } from 'HOC';
import { loadRecipe, refresh } from '../../store/actions';
import ViewRecipe from './components/ViewRecipe';

const mapStateToProps = (state, router) => {
  const { recipes } = state;
  const { params } = router.match;

  return {
    loading: recipes.loading,
    loaded: recipes.loaded,
    loadParam: params.recipeId,
    recipe: recipes.recipe
  };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { load: loadRecipe, refresh }
  ),
  LoadComponent,
  RefreshComponent
)(ViewRecipe);
