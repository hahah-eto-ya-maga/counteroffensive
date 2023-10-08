import React from "react";
import { useServer } from "./modules";
import { HOST } from "./config";
import { ServerContext } from "./context";

import "./styles/global.css";
import { LoginPage } from "./pages";

const App: React.FC = () => {
   const server = useServer(HOST);
   return (
      <ServerContext.Provider value={server}>
         <div className="app">
            <LoginPage />
         </div>
      </ServerContext.Provider>
   );
};

export default App;
