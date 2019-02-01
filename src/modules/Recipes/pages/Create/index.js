import { connect } from 'react-redux';
import { RecipeForm } from 'components';
import { saveRecipe } from '../../store/actions';

export default connect(
  null,
  { saveRecipe }
)(RecipeForm);
