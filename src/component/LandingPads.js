import React,{useState,useEffect} from 'react'
import CardLandingPads from './CardLandingPads';

const LandingPads = () => {
    const[pads,setPads]=useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/landpads")
          .then((res) => res.json())
          .then((pads) => {
            setPads(pads);
          })
          .catch((e) => {
            console.log("error");
          })
      }, []);

    return (
        <div
        style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent:"center",
            padding:"20px",
            margin:"20px"
          }}
        >
            {pads.map((res) => (
        <CardLandingPads pads={res} />
      ))}

            
        </div>
    )
}

export default LandingPads