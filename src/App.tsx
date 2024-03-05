import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Route} from "@mui/icons-material";
import {MainPage} from "./pages/MainMage/MainPage";
import {Outlet, Routes} from "react-router-dom";
import {SideMenu} from "./components/SideMenu";

function App() {
  return (
    <div className="App">
      <Header/>
        <SideMenu/>
      {/*<Outlet/>*/}
    </div>
  );
}

export default App;
