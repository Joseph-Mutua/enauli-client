import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
