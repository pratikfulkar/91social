import React,{useState,useEffect} from 'react'
import CardRoadster from './CardRoadster';

const Roadster = () => {
    const[roadster,setRoadster]=useState({});

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/roadster")
          .then((res) => res.json())
          .then((roadster) => {
            setRoadster(roadster);
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
           <CardRoadster roadster={roadster}/>

            
        </div>
    );
};

export default Roadster
