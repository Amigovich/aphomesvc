import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Estimate = () => {
  const [roomCount, setRoomCount] = useState(1);
  const [totalCost, setTotalCost] = useState(0);

  const handleRoomCountChange = (e) => {
    setRoomCount(e.target.value);
  };

  const calculateEstimate = () => {
    const costPerRoom = 500; // Example cost per room
    const total = roomCount * costPerRoom;
    setTotalCost(total);
  };

  return (
    <Container className="mt-5">
      <h1>Home Improvement Estimate</h1>
      <Form>
        <Form.Group>
          <Form.Label>Number of Rooms</Form.Label>
          <Form.Control
            type="number"
            value={roomCount}
            onChange={handleRoomCountChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={calculateEstimate}>
          Calculate Estimate
        </Button>
      </Form>
      {totalCost > 0 && (
        <div className="mt-3">
          <h3>Estimated Cost: ${totalCost}</h3>
        </div>
      )}
    </Container>
  );
};

export default Estimate;