import React from "react";
import AppProvider from "./store/AppProvider";
import Home from "./components/Home";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
