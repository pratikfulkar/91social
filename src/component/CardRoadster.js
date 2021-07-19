import React,{useEffect,useState} from 'react'
import { Card } from "react-bootstrap";


const CardRoadster = (props) => {
    const {roadster} = props;
    const[date,setDate]=useState()
  
    useEffect(()=>{
      setDate(Date(roadster.launch_date_unix*1000));
  
    },[])

    return (
        <div>
            <Card
        bg="dark"
        text="light"
        style={{ width: "50rem", margin: "30px", padding: "20px" }}
      >
        <Card.Header className="text-center">
          <h4>Name : {roadster.name}</h4>
        </Card.Header>
        <Card.Body>
          <Card.Text>launch_date_utc : {roadster.launch_date_utc}</Card.Text>
          <Card.Text>launch_date_unix :   {date}</Card.Text>
          <Card.Text>launch_mass_kg  : {roadster.launch_mass_kg}</Card.Text>
          <Card.Text>launch_mass_lbs :{roadster.launch_mass_lbs}</Card.Text>
          <Card.Text>norad_id:{roadster.norad_id}</Card.Text>
          <Card.Text>epoch_jd:{roadster.epoch_jd}</Card.Text>
          <Card.Text>orbit_type :  {roadster.orbit_type}</Card.Text>
          <Card.Text>apoapsis_au : {roadster.apoapsis_au}</Card.Text>
          <Card.Text>periapsis_au : {roadster.periapsis_au}</Card.Text>
          <Card.Text>semi_major_axis_au:{roadster.semi_major_axis_au}</Card.Text>
          <Card.Text>eccentricity : {roadster.eccentricity}</Card.Text>
          <Card.Text>inclination : {roadster.inclination}</Card.Text>
          <Card.Text>longitude : {roadster.longitude}</Card.Text>
          <Card.Text>periapsis_arg : {roadster.periapsis_arg}</Card.Text>
          <Card.Text>period_days : {roadster.period_days}</Card.Text>
          <Card.Text>speed_kph : {roadster.speed_kph}</Card.Text>
          <Card.Text>speed_mph : {roadster.speed_mph}</Card.Text>
          <Card.Text>earth_distance_km : {roadster.earth_distance_km}</Card.Text>
          <Card.Text>earth_distance_mi : {roadster.earth_distance_mi}</Card.Text>
          <Card.Text>mars_distance_km : {roadster.mars_distance_km}</Card.Text>
          <Card.Text>mars_distance_mi : {roadster.mars_distance_mi}</Card.Text>
          <Card.Text>details : {roadster.details}</Card.Text>
          <Card.Text className="text-center" ><a style={{color:"#FFF5B7"}}  target="_blank" href={roadster.wikipedia}>Wikipedia</a></Card.Text>

        
        </Card.Body>
      </Card>
        </div>
    )
}

export default CardRoadster