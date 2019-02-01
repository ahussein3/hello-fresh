import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Button, LinkedText } from '../../components';

import './index.scss';

const WrappedNavbar = () => {
  return (
    <Navbar className="app-nav" bg="light" variant="light">
      <Navbar.Brand href="/">
        <img
          className="nav-brand"
          src="https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg"
          alt="HelloFresh"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/create">Create</Nav.Link>
      </Nav>
      <LinkedText to="/recipes">
        <Button variant="danger">View Recipes</Button>
      </LinkedText>
    </Navbar>
  );
};

export default WrappedNavbar;
