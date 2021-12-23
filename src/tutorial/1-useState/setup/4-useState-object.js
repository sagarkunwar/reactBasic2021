import React, { useState } from "react";

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "Peter",
    age: 24,
    message: "lets Generate Random message",
  });

  const generateMessage = () => {
    if (people.message === "lets Generate Random message") {
      setPeople({ ...people, message: "Check" });
    } else {
      setPeople({ ...people, message: "lets Generate Random message" });
    }
  };
  return (
    <>
      <h1>{people.name}</h1>
      <h2>{people.age}</h2>
      <p>{people.message}</p>
      <button type="button" onClick={generateMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
