import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './RecipeList.scss';

const RecipeList = props => {
  const { recipes = [], deleteRecipe } = props;

  return (
    <div className="recipe_list_container">
      <Container>
        <Row>
          {recipes.map(recipe => {
            const { title, description, photo, tags, duration, id } = recipe;

            return (
              <Col key={`${id}-${title}`} xs={12} sm={3} md={4}>
                <Card>
                  <Card.Img variant="top" src={photo} />
                  <Card.Body>
                    <p className="card-tag">{tags}</p>
                    <Card.Title>
                      <Link to={`/recipes/${id}`}>{title}</Link>
                    </Card.Title>
                    <Card.Text>
                      <span className="card-description">{description}</span>
                    </Card.Text>
                    <div className="card-control">
                      <p className="card-footer-text">{duration}</p>
                      <i
                        className="fas fa-trash-alt"
                        onClick={() => deleteRecipe(id)}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default RecipeList;
