import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  const [items, setItems] = useState([
    {
      id:1,
      checked: true,
      items: "this is the item one"
      
    },
    {
      id:2,
      checked: false,
      items: "this is the item two"
      
    },
    {
      id:3,
      checked: true,
      items: "this is the item three"
      
    },
  ])
  
  return (
      <div className="flex flex-col text-3xl justify-between items-center h-screen w-screen">
        <Header />
        <Content />
        <Footer />
      </div>
  );
};

export default App;
