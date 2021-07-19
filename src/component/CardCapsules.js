import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";


const CardCapsules = (props) => {
  const { capsules } = props;
  const[date,setDate]=useState()

  useEffect(()=>{
    setDate(Date(capsules.original_launch_unix*1000));

  },[])

  return (
    <div>
      <Card
        bg="dark"
        text="light"
        style={{ width: "50rem", margin: "30px", padding: "20px" }}
      >
        <Card.Header className="text-center">
          <h4>Capsules Serial :{capsules.capsule_serial}</h4>
        </Card.Header>
        <Card.Body>
          
          <Card.Text>Capsules id : {capsules.capsule_id}</Card.Text>
          <Card.Text>Status :   {capsules.status}</Card.Text>
          <Card.Text>Original Lunch : {capsules.original_launch}</Card.Text>
          <Card.Text>Details :{date}</Card.Text>
          <Card.Text>Missions Name:{capsules.missions.name}</Card.Text>
          <Card.Text>Missions Flight:{capsules.missions.flight}</Card.Text>
          <Card.Text>Landings:  {capsules.landings}</Card.Text>
          <Card.Text> Type:  {capsules.type}</Card.Text>
          <Card.Text>Details:  {capsules.details}</Card.Text>
          {/* <Card.Text>{histry.links.wikipedia}</Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCapsules;
