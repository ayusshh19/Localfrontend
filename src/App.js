import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accounts from "./pages/Accounts";
import Dashboard from "./pages/Dashboard";
import Cart from "./component/Cart"
import Login from "./components/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addtocart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
