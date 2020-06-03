import React, { createContext, useState } from "react";
import uuid from "uuid/dist/v4";
export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  const [modal, setModal] = useState(false);
  const [items, setItems] = useState([
    { id: 1, name: "tomatoes", desc: "this a tomatoes", price: 45 },
    { id: 2, name: "pepper", desc: "this a pepper", price: 40 },
    { id: 3, name: "cassava", desc: "this a casaava", price: 50 },
    { id: 4, name: "onion", desc: "this a onionn", price: 30 },
    { id: 5, name: "gari", desc: "this a gari", price: 80 },
  ]);

  const addItem = (name, desc, price) => {
    setItems([...items, { id: uuid(), name, desc, price }]);
  };
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggle = () => setModal(!modal);
  return (
    <ItemContext.Provider value={{ items, addItem, removeItem, toggle, modal }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
