import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    let title = "hello world";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        You can change the title from here
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
