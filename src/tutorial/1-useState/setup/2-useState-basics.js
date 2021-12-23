import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hello world"));
  // console.log(useState);
  // usually useState takes value and function
  // and it returns value in array for.eg[value, function]
  //in above console.log(useState("hello world"));
  // result is [hello world, function] and function always controls the value
  // function returns array then we can use desturcting array
  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };

  const [text, setText] = useState("Lets Generate random number");

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Generate Random Text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
