import React from "react";

import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); // destructring useState because it returns array
  const removeItem = (id) => {
    let newPeople = people.filter((ppls) => ppls.id === id); //filter helps to remove the data by filtering and
    // we are also filtering id for user is equal to id in list then remove them.
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((ppls) => {
        // mapping data fo people in array with props or object(ppls)
        const { id, name } = ppls; // now we are destructing assigments
        console.log(ppls);
        return (
          // putting values in UI
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        {/* in above button we are returing the arrow function where setPeople is empty array */}
        Clear item
      </button>
    </>
  );
};

export default UseStateArray;
