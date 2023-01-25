// using spread operator

// complex state with three inputs and change state for each input using conditional

import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(e) {
    // destructure info first form the synthetic event i.e. name and value of input fields
    const { name, value } = e.target;
    
    // console.log(name)
    // console.log(value)

    
    // setFunction 'comes with' a prevValue paramter which can be logged. The 'prevValue' is an object with the defined keys (i.e. fName, lName, email)
    setContact(prevValue => {
      return {
        ...prevValue,
        [name] = value // new ES6 feature which takes name ATTRIBUTE as the key of the changed value.
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} value={contact.fName} name="fName" placeholder="First Name" />
        <input onChange={handleChange} value={contact.lName} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} value={contact.email} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
