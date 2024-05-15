import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Rohan");

  const handleNameChange = () => {
    const names = ["rohan", "Jaadu", "vikram"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
    return names
  };

  const handleClick2 = (e) => {
    e.target.innerText = name;
  };

  const handleClick3 = () => {handleNameChange()};

  return (
    <main>
      <h2>
        Hello {name} <br />
      </h2>
      <button onClick={handleClick3}>
        change name
      </button>

      <button onClick={(e) => handleClick2(e)}>
        set current username the button name
      </button>
    </main>
  );
};

export default Content;
