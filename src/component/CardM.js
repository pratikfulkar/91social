import React,{useState,useEffect} from "react";
import { Card } from "react-bootstrap";



const CardM = (props) => {
const{histry}=props;
const[date,setDate]=useState();

useEffect(()=>{

  setDate(Date(histry.event_date_unix*1000));

},[])


  return (
    <div>
      <Card bg="dark" text="light"
       style={{ width: '50rem',
                margin:"30px",
                padding:"20px"
              }}>
        <Card.Header className="text-center">
          <h4>{histry.title}</h4>
          </Card.Header>
        <Card.Body>
          <Card.Text>Event Date : {histry.event_date_utc}</Card.Text>
          <Card.Text>Event Date uuix :{date}</Card.Text>
          <Card.Text>Fight Number : {histry.flight_number}</Card.Text>
          <Card.Text>
            <p> Details :{histry.details}</p>
          </Card.Text>
          <Card.Text className="text-center" ><a style={{color:"#FFF5B7"}}  target="_blank" href={histry.links.article}>Show More</a></Card.Text>
          {/* <Card.Text>{histry.links.wikipedia}</Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardM;
