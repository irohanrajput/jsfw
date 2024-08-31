import React, { useState } from 'react'

const Content = () => {
  const [items, setItems]=useState([
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
      
    }
  ])
  return (
    <>
    </>
  )
}

export default Content
