import React from 'react'
import { Card } from "react-bootstrap";


const CardLandingPads = (props) => {
    const {pads} = props;

    return (
        <div>
            <Card
        bg="dark"
        text="light"
        style={{ width: "50rem", margin: "30px", padding: "20px" }}
      >
        <Card.Header className="text-center">
          <h4>Full Name :{pads.full_name}</h4>
        </Card.Header>
        <Card.Body>
          <Card.Text>Status : {pads.status}</Card.Text>
          <Card.Text>Landing Type :   {pads.landing_type}</Card.Text>
          <Card.Text>Attempted Landings  : {pads.attempted_landings}</Card.Text>
          <Card.Text>Successful Landings :{pads.successful_landings}</Card.Text>
          <Card.Text>Details :{pads.details}</Card.Text>
          <Card.Text className="text-center" ><a style={{color:"#FFF5B7"}}  target="_blank" href={pads.wikipedia}>Wikipedia</a></Card.Text>
        
        </Card.Body>
      </Card>
        </div>
    )
}

export default CardLandingPads