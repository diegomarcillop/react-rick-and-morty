import React from "react";
import "./App.css";
import CharacterPage from "pages/CharacterPage";
 
function App() {
  return (
    <div className="App" id="app">
      <h1 className="title">Rick and Morty</h1>
       <CharacterPage />
    </div>
  );
}

export default App;
