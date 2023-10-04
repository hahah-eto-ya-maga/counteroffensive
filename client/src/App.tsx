import React from "react";
import { useServer } from "./modules";
import { ServerContext } from "./context";
import { HOST } from "./config";
import "./App.css";

const App: React.FC = () => {
  const server = useServer(HOST);
  return (
    <ServerContext.Provider value={server}>
      <div></div>
    </ServerContext.Provider>
  );
};

export default App;
