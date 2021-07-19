import React from "react";
import { Card } from "react-bootstrap";


const CardPayLoads = (props) => {
  const { payloads } = props;


  return (
    <div>
      <Card
        bg="dark"
        text="light"
        style={{ width: "50rem", margin: "30px", padding: "20px" }}
      >
        <Card.Header className="text-center">
          <h4>Payload id :{payloads.payload_id}</h4>
        </Card.Header>
        <Card.Body>
          
          <Card.Text>Nationality : {payloads.nationality}</Card.Text>
          <Card.Text>Manufacturer :   {payloads.manufacturer}</Card.Text>
          <Card.Text>payload Type : {payloads.payload_type}</Card.Text>
          <Card.Text>Payload Mass kg :{payloads.payload_mass_kg}</Card.Text>
          <Card.Text>Payload Mass lbs:{payloads.payload_mass_lbs}</Card.Text>
          <Card.Text>Orbit :{payloads.orbit}</Card.Text>
          <Card.Text>Reference System:  {payloads.orbit_params.reference_system}</Card.Text>
        
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardPayLoads;
