import React, { useState } from "react";

function App() {
  
  // changes value of 'value' of input. Note: HTML form tags need to have their own state
  const [name, setName] = useState("");
  
  // one name has been set by 'setName', we can use this to set the heading our the webpage (for this particular e.g.)
  const [headingText, setHeading] = useState("");

  // targeting event's value
  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClick(e) {
    setHeading(name);
    // prevents refresh (i.e. default behaviour associated with event)
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
