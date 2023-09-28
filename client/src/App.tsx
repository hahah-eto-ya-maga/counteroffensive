import React from "react";
import Game from "./components/game/Game";
import Header from "./components/Header/Header";
import "./App.css";

const App: React.FC = () => {
   return (
      <div className="App">
         <Header />
         <Game />
      </div>
   );
};

export default App;
