import { Routes, Route } from "react-router-dom";
import LayoutHome from "./Layout/LayoutHome";
import Login from "./Pages/Login/Login";
import Changepass from "./Pages/Login/Changepass";
import TrangChu from "./Pages/Trang Chu/TrangChu";
import Mua from "./Pages/BuySP/Mua";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/LayoutHome" element={<LayoutHome />} />
        <Route path="/" element={<Login />} />
        <Route path="/Changepass" element={<Changepass />} />
        <Route path="/TrangChu" element={<TrangChu />} />
        <Route path="/TrangChu/Mua" element={<Mua />} />
      </Routes>
    </div>
  );
}

export default App;
