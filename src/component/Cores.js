import React,{useState,useEffect} from 'react'
import CardCores from './CardCores';


const Cores = () => {

    const[cores,setCores]=useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/cores")
          .then((res) => res.json())
          .then((cores) => {
            setCores(cores);
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
          }}>
              {cores.map((res) => (
        <CardCores  cores={res} />
      ))}
            
        </div>
    )
}

export default Cores
