import React, { useEffect, useState } from "react";

const Mouse = () => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [name, setName] = useState([]);
  const [number, setNumber] = React.useState(0);
  const [key, setKey] = useState("");
    const [result, setResult] = useState([]);
  const alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

 
//   const handleMouse = (e) => {
//     setX(e.screenX);
//     setY(e.screenY);
//   };
//   const clickFunction = (e) => {
//     e.preventDefault();
//   };

//   const handleSize = (e) => {
//     setNumber((prev) => prev + 1);
//   };

  const handleKey = (e) => {
    console.log(e);
    setNumber((prev) => prev + 1);
    setKey(e.key);
  
    if(e.key === alphabets[number]){
        setResult((prev) => {
          return [...prev, e.key];
        }); 
    }

    

    setName((prev) => {
      return [...prev, e.key];
    });
  };

  useEffect(() => {
    // document.addEventListener("mousemove", handleMouse);
    //document.addEventListener("contextmenu", clickFunction);
    document.addEventListener("keydown", handleKey);
    // window.addEventListener("resize", handleSize);
  }, []);

  return (
    <div>
      <p>{x}</p>
      <p>{y}</p>
      <h1>{number}</h1>

      0

      <h2>Typing Club</h2>
        <h1>{name.join("")}</h1>

      <h1>You have clicked {key}</h1>
      
    </div>
  );
};

export default Mouse;
