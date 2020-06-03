import React from "react";
import ItemList from "./components/ItemList";
import ItemContextProvider from "./contexts/ItemContext";
import NavBar from "./components/NavBar";
import NewItem from "./components/NewItem";

function App() {
  return (
    <div className="App">
      <ItemContextProvider>
        <NavBar />
        <NewItem />
        <ItemList />
      </ItemContextProvider>
    </div>
  );
}

export default App;
