import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accounts from "./pages/Accounts";
import Dashboard from "./pages/Dashboard";
import Cart from "./component/Cart"
import Loading from "./pages/Loading";
import Login from "./components/Login";
import Listdisplay from "./components/Listdisplay";



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
          <Route path="/allproducts" element={<Listdisplay/>} />
          <Route path="load" element={<Loading/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
