import React from 'react'
import { Card } from "react-bootstrap";


const CardInfo = (props) => {
    const {info} = props;

    return (
        <div>
            <Card
        bg="dark"
        text="light"
        style={{ width: "50rem", margin: "30px", padding: "20px" }}
      >
        <Card.Header className="text-center">
          <h4>spaceX</h4>
        </Card.Header>
        <Card.Body>
          <Card.Text>Founder : {info.founder}</Card.Text>
          <Card.Text>Founded :   {info.founded}</Card.Text>
          <Card.Text>Employees  : {info.employees}</Card.Text>
          <Card.Text>Vehicles :{info.vehicles}</Card.Text>
          <Card.Text>Launch Sites:{info.launch_sites}</Card.Text>
          <Card.Text>Test Sites:{info.test_sites}</Card.Text>
          <Card.Text>CEO :  {info.ceo}</Card.Text>
          <Card.Text>CTO : {info.cto}</Card.Text>
          <Card.Text>COO : {info.coo}</Card.Text>
          <Card.Text>Cto propulsion:{info.cto_propulsion}</Card.Text>
          <Card.Text>Valuation : {info.valuation}</Card.Text>
          <Card.Text>Summary : {info.summary}</Card.Text>
        
        </Card.Body>
      </Card>
        </div>
    )
}

export default CardInfo