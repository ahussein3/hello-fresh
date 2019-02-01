import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { isEmpty } from 'lodash';
import { Form, Button } from 'react-bootstrap';
import './index.scss';

class RecipeForm extends Component {
  state = {
    formData: {
      title: '',
      description: '',
      tags: '',
      duration: '',
      cookingDifficulty: 'easy',
      photo: '',
      ingredients: [],
      instructions: []
    },
    ingredient: '',
    instruction: '',
    isLoading: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { recipe = {} } = nextProps;
    if (recipe.id !== prevState.formData.id) {
      return { formData: { ...prevState.formData, ...nextProps.recipe } };
    }

    return null;
  }

  updateFormData = obj => {
    return { ...this.state.formData, ...obj };
  };

  addIngredient = () => {
    const { formData, ingredient } = this.state;

    this.setState({
      formData: this.updateFormData({
        ingredients: [...formData.ingredients, ingredient]
      }),
      ingredient: ''
    });
  };

  addStep = () => {
    const { formData, instruction } = this.state;

    this.setState({
      formData: this.updateFormData({
        instructions: [...formData.instructions, instruction]
      }),
      instruction: ''
    });
  };

  handleChange = e => {
    const { name, value } = e.target;

    const isOtherFields = ['instruction', 'ingredient'].includes(name);

    const data = isOtherFields
      ? { [name]: value }
      : { formData: this.updateFormData({ [name]: value }) };

    this.setState(data);
  };

  handleDelete = (key, index) => {
    let itemList = this.state.formData[key];

    itemList = itemList.filter((item, idx) => idx !== index);

    this.setState({
      formData: this.updateFormData({ [key]: itemList })
    });
  };

  gotoRoute = () => {
    this.props.history.push('/recipes');
  };

  publishRecipe = () => {
    this.setState({ isLoading: true });
    this.props.saveRecipe(this.state.formData).then(() => {
      this.setState({ isLoading: false }, () => this.gotoRoute());
    });
  };

  renderInstructionForm = () => {
    const {
      formData: { instructions },
      instruction
    } = this.state;

    return (
      <Fragment>
        <div>
          <Form.Group controlId="recipeForm.ControlTextarea1">
            <Form.Label>Cooking Instructions</Form.Label>
            <Form.Control
              name="instruction"
              placeholder="enter cooking instruction"
              as="textarea"
              rows="3"
              value={instruction}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              Press the Add instruction button to add a cooking step/instruction
            </Form.Text>
          </Form.Group>
          <Button onClick={this.addStep}>Add Instruction</Button>
        </div>
        <div className="item-list">
          <ol>
            {instructions.map((instruction, idx) => {
              return (
                <li key={idx}>
                  <div className="item">
                    <span>{instruction}</span>
                    <span className="item-control">
                      <i
                        className="fas fa-trash-alt"
                        onClick={() => this.handleDelete('instructions', idx)}
                      />
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Fragment>
    );
  };

  renderIngredientsForm = () => {
    const {
      formData: { ingredients },
      ingredient
    } = this.state;

    return (
      <Fragment>
        <div>
          <Form.Group controlId="recipeForm.ingredients">
            <Form.Label>Cooking Ingredients</Form.Label>
            <Form.Control
              name="ingredient"
              placeholder="Ingredients"
              value={ingredient}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button onClick={this.addIngredient}>Add Ingredients</Button>
        </div>
        <div className="item-list">
          <ul>
            {ingredients.map((ingredient, idx) => {
              return (
                <li key={idx}>
                  <div className="item">
                    <span>{ingredient}</span>
                    <span className="item-control">
                      <i
                        className="fas fa-trash-alt"
                        onClick={() => this.handleDelete('ingredients', idx)}
                      />
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Fragment>
    );
  };

  render() {
    const { isLoading, formData } = this.state;

    const canPublish = Object.keys(formData).reduce((memo, key) => {
      return memo && !isEmpty(formData[key]);
    }, true);

    return (
      <div className="recipe-form-container">
        <Form>
          <Form.Group controlId="recipeForm.title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              placeholder="Recipe title"
              value={formData.title}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="recipeForm.description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              placeholder="description"
              as="textarea"
              rows="3"
              value={formData.description}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              Give a description for this recipe
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="recipeForm.tags">
            <Form.Label>Recipe Tag</Form.Label>
            <Form.Control
              name="tags"
              placeholder="spicy, veggie, med carbs, high protein, etc"
              value={formData.tags}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="recipeForm.title">
            <Form.Label>Cooking Time</Form.Label>
            <Form.Control
              name="duration"
              placeholder="cooking time in mins"
              value={formData.duration}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="recipeForm.photo">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control
              name="photo"
              placeholder="photo url"
              value={formData.photo}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="recipeForm.cookingDifficulty">
            <Form.Label>Cooking Difficulty</Form.Label>
            <Form.Control
              as="select"
              name="cookingDifficulty"
              onChange={this.handleChange}
            >
              <option value="easy">Easy</option>
              <option value="difficult">Difficult</option>
            </Form.Control>
          </Form.Group>
          {this.renderIngredientsForm()}
          {this.renderInstructionForm()}
          <div className="btn-control-container">
            <Button onClick={this.publishRecipe} disabled={!canPublish}>
              {isLoading ? 'Publishing...' : 'Publish Recipe'}
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default withRouter(RecipeForm);
