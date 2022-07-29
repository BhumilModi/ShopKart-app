import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home loggedIn={loggedIn} />} />
        <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/signin" element={<Signin setLoggedIn={setLoggedIn} />} />
        <Route path="/cart" element={<Cart loggedIn={loggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
