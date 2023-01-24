import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [heading, setHeading] = useState("");

  function handleChange1(e) {
    setFname(e.target.value);
  }

  function handleChange2(e) {
    setLname(e.target.value);
  }

  function handleClick(e) {
    setHeading(fname + " " + lname);

    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      // once submitted, the h1 heading should say 'Bob Sleigh' (for example) if 'Bob' typed into first input, and 'Sleigh' in second input
      <form onSubmit={handleClick}>
        <input
          value={fname}
          onChange={handleChange1}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={lname}
          onChange={handleChange2}
          name="lName"
          placeholder="Last Name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
