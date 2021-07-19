import React,{useEffect,useState} from "react";
import { Card } from "react-bootstrap";

const CardCores = (props) => {
  const { cores } = props;
  const[date,setDate]=useState();

useEffect(()=>{

  setDate(Date(cores.original_launch_unix*1000));

},[])

  return (
    <div>
      <Card
        bg="dark"
        text="light"
        style={{ width: "50rem", margin: "30px", padding: "20px" }}
      >
        <Card.Header className="text-center">
          <h4>{cores.core_serial}</h4>
        </Card.Header>
        <Card.Body>
          <Card.Text>Status : {cores.status}</Card.Text>
          <Card.Text>Lunch  : {cores.original_launch}</Card.Text>
          <Card.Text>Lunch time : {date}</Card.Text>
          <Card.Text>Missions Name:  {cores.missions.name}</Card.Text>
          <Card.Text>Missions Flight:  {cores.missions.flight}</Card.Text>
          <Card.Text>Details :  {cores.details} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCores;
