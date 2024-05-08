import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Routes, Route } from "react-router-dom";

import MainView from "./pages/MainView/MainView";
import Pokedex from "./pages/Pokedex/Pokedex";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
