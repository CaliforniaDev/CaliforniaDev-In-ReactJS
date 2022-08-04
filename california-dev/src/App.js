import { useState, useEffect } from "react";
import { NavDrawer } from "./components/NavDrawer";
import { Body } from "./components/Body";
function App() {
  return (
    <div>
      <NavDrawer isScrollTop={isScrollTop} />
      <Body isScrollTop={isScrollTop} />
    </div>
  );
}

export default App;
