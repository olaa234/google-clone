import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    // Bem convention
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
