import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const counter1 = "Basic Counter";
  const counter2 = "Complex Counter";
  const later = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  const reset = () => setValue(0);

  return (
    <>
      <div className="card">
        <div>
          <h2>{counter1}</h2>
          <h1>{value}</h1>
          <button className="btn" onClick={() => setValue(value - 1)}>
            Decrease
          </button>
          <button className="btn" onClick={reset}>
            Reset
          </button>
          <button className="btn" onClick={() => setValue(value + 1)}>
            Increase
          </button>
        </div>
        <div>
          <br />
          <br />
          <h2>{counter2}</h2>
          <h1>{value}</h1>
          <button className="btn" onClick={() => later}>
            Increase Later
          </button>
        </div>
      </div>
    </>
  );
};

export default UseStateCounter;
