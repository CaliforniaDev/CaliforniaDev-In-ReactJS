import { useState, useEffect } from "react";
import { NavDrawer } from "./components/NavDrawer";
import { Body } from "./components/Body";
function App() {
  return (
    <div>
      <NavDrawer />
      <Body />
    </div>
  );
}

export default App;
