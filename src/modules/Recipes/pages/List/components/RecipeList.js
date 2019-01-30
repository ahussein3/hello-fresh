import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './RecipeList.scss';

const RecipeList = props => {
  const { recipes = [], history } = props;

  const handleCard = recipeId => {
    history.push(`/recipes/${recipeId}`);
  };

  return (
    <div className="recipe_list_container">
      <Container>
        <Row>
          {recipes.map(recipe => {
            const { title, description, photo, tags, duration, id } = recipe;

            return (
              <Col key={`${id}-${title}`} xs={12} sm={3} md={4}>
                <Card onClick={() => handleCard(id)}>
                  <Card.Img variant="top" src={photo} />
                  <Card.Body>
                    <p className="card-tag">{tags}</p>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                      <span className="card-description">{description}</span>
                    </Card.Text>
                    <p className="card-footer-text">{duration}</p>
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
