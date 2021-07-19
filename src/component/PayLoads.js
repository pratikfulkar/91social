import React,{ useEffect, useState } from 'react'
import CardPayLoads from './CardPayLoads';

const PayLoads = () => {

    const[payloads,setPayloads]=useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/payloads")
          .then((res) => res.json())
          .then((payloads) => {
            setPayloads(payloads);
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
              {payloads.map((res) => (
        <CardPayLoads   payloads={res} />
      ))}
            
        </div>
    )
}

export default PayLoads
