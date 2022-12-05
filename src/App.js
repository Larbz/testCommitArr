import { useEffect, useState } from "react";
import "./App.css";
import { ListPokemons } from "./components/ListPokemons/ListPokemons";
import { Pokemon } from "./components/Pokemon/Pokemon";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <ListPokemons></ListPokemons>
    </div>
  );
}

export default App;
