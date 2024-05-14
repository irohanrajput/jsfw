import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["rohan", "Jaadu"];
    const int = Math.floor(Math.random() * 2);
    return names[int];
  };

  const handleClick = () => {
    alert("you clicked it");
  };
  const handleClick2 = (e) => {
    console.log(e.target.innerText = "life is good"
    )    ;
  };




  return (
    <main>
      <p>
        Hello <br />
        <button onClick={handleClick}>you clicked it</button>
        <button onClick={(e) => handleClick2(e)}>switch names</button>
        <br />
        <br />
      </p>
    </main>
  );
};

export default Content;
