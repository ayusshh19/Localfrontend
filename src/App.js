import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accounts from "./pages/Accounts";
import Dashboard from "./pages/Dashboard";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/dashboard" element={<Dashboard />} />
          

      </Routes>
    </BrowserRouter>
  );
}

export default App;
