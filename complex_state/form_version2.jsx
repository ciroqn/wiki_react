// Draft - gist is that instead of writing multiple functions to change state, all the changes can be distilled in one useState *object*

import React, { useState } from "react";

function App() {
  
  // create object state with necessary/relevant info
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function changeFullName(e) {
    //const inputValue = e.target.value;
    //const nameType = e.target.name;

    // destructure
    const { value, name } = e.target;

    // note 'event' or 'e' cannot be used in a setFunction() as this is a 'synthetic event' (i.e. one created by React and not the browser) 
//and not a real one.
    setFullName((prevVal) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevVal.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevVal.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {fullName}</h1>
      <form onSubmit={changeFullName}>
        <input
          //value={fName}
          onChange={changeFullName}
          name="fName"
          placeholder="First Name"
        />
        <input
          //value={lName}
          onChange={changeFullName}
          name="lName"
          placeholder="Last Name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
