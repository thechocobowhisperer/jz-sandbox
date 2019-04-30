import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-2">Welcome!</h1>
        <p className="lead">Here you'll find images of my completed and mostly incompleted art projects.</p>
        <hr className="my-3" />
        <p>Dive in and enjoy your visit!</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;