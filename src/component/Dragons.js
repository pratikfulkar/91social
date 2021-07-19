import React,{useState,useEffect} from 'react'
import CardDragons from './CardDragons';

const Dragons = () => {
    const[dragons,setDragons]=useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/dragons")
          .then((res) => res.json())
          .then((dragons) => {
            setDragons(dragons);
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
            {dragons.map((res) => (
        <CardDragons dragons={res} />
      ))}

            
        </div>
    )
}

export default Dragons
