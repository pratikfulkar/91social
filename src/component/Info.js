import React,{useState,useEffect} from 'react'
import CardInfo from './CardInfo';

const Info = () => {
    const[info,setInfo]=useState({});

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/info")
          .then((res) => res.json())
          .then((info) => {
            setInfo(info);
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
           <CardInfo info={info}/>

            
        </div>
    );
};

export default Info
