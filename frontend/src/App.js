import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Tasks from "./pages/Tasks";
import IngaCodeProvider from "./context/IngaCodeProvider";

function App() {
  return (
    <IngaCodeProvider>
      <Routes>
        <Route path="/" element={<Tasks />} />
      </Routes>
    </IngaCodeProvider>
  );
}

export default App;
