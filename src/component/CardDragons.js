import React from 'react'
import { Card } from "react-bootstrap";


const CardDragons = (props) => {
    const {dragons} = props;

    return (
        <div>
            <Card
        bg="dark"
        text="light"
        style={{ width: "50rem", margin: "30px", padding: "20px" }}
      >
        <Card.Header className="text-center">
          <h4>Capsules Serial :{dragons.name}</h4>
        </Card.Header>
        <Card.Body>
          <Card.Text>Type : {dragons.type}</Card.Text>
          <Card.Text>Sidewall angle Deg :   {dragons.sidewall_angle_deg}</Card.Text>
          <Card.Text>Orbit duration  : {dragons.orbit_duration_yr}</Card.Text>
          <Card.Text>Dry mass kg :{dragons.dry_mass_kg}</Card.Text>
          <Card.Text>Dry mass lb:{dragons.dry_mass_lb}</Card.Text>
          <Card.Text>First flight:{dragons.first_flight}</Card.Text>
        
        </Card.Body>
      </Card>
        </div>
    )
}

export default CardDragons
