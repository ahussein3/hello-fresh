import React from 'react';
import { Button, LinkedText } from '../../components';
import './styles.scss';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-details">
        <h1>Hello Recipe's</h1>
        <h1>Most Popular Meal Kit</h1>
        <p>Now available for free</p>
        <LinkedText to="/recipes">
          <Button className="link-button" variant="danger">
            View Recipes
          </Button>
        </LinkedText>
      </div>
    </div>
  );
};

export default Landing;
