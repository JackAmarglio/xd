import React from "react";
import Navbar from "./components/Navbar"
import "./App.css";
import Sidebar from "./components/Sidebar"
import Content from "./components/Content"

const App = () => {
  return(
    <div className="app">
      <Navbar />
      <div style={{display: "flex"}}>
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default App;
