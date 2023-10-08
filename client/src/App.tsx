import React from "react";
import { useServer } from "./modules";
import { ServerContext } from "./context";
import { HOST } from "./config";
import "./styles/global.css";
import { LoginPage } from "./pages";
import LobbiPage from "./pages/LobbiPage/LobbiPage";

const App: React.FC = () => {
  const server = useServer(HOST);
  return (
    <ServerContext.Provider value={server}>
      <div>
      </div>
    </ServerContext.Provider>
  );
};

export default App;
