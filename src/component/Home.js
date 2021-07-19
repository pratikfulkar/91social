import React, { useEffect, useState } from "react";
import CardM from "./CardM";

const Home = () => {
  const [histry, setHistry] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/history")
      .then((res) => res.json())
      .then((histry) => {
        setHistry(histry);
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
      {histry.map((res) => (
        <CardM key={res.id} histry={res} />
      ))}
    </div>
  );
};

export default Home;

// const[histry,setHistry]=useState([]);

// useEffect(()=>{

//         fetch("https://api.spacexdata.com/v3/history")
//         .then((res)=>res.json())
//         .then((histry)=>{
//             setHistry(histry)
//         })
//         .catch((e)=>{
//             console.log("error")
//         })
//     },[])

//   return (
//     <div>

//         {histry.map((res)=>(

//       <Card className="text-center">
//         <Card.Header>{res.title}</Card.Header>
//         <Card.Body>
//           <Card.Title>Special title treatment</Card.Title>
//           <Card.Text>
//             With supporting text below as a natural lead-in to additional
//             content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//         ))}

//     </div>
//   )
