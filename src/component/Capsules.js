import React,{ useEffect, useState } from 'react'
import CardCapsules from './CardCapsules';

const Capsules = () => {

    const[capsules,setCapsules]=useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/capsules")
          .then((res) => res.json())
          .then((capsules) => {
            setCapsules(capsules);
            // console.log(data);
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
              {capsules.map((res) => (
        <CardCapsules   capsules={res} />
      ))}
            
        </div>
    )
}

export default Capsules
