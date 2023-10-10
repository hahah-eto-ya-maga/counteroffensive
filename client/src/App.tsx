import React from "react";
import "./styles/global.css";
import { LoginPage, SignInPage, MenuPage } from "./pages";

const App: React.FC = () => {
  return (
    <div className="app">
      <MenuPage />
    </div>
  );
};

export default App;
