import React from "react";
import { useServer } from "./modules";
import { ServerContext } from "./context";
import { HOST } from "./config";
import "./styles/global.css";
import { LoginPage, MenuPage, SignInPage } from './pages';

const App: React.FC = () => {
   const server = useServer(HOST);
   return (
     <ServerContext.Provider value={server}>
       <div className="app">
         {/* <LoginPage />*/}
        {/* <SignInPage /> */}
		  <MenuPage/> 
       </div>
     </ServerContext.Provider>
   );
};

export default App;
