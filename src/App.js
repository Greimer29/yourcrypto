import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fallo from "./components/Fallo";
import Layout from "./components/Layout";
import CryptoCurrencies from "./pages/CryptoCurrencies";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App()  {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/cryptocurrencies" element={<CryptoCurrencies />} />
          {/* <Redirect from="*" to="/404" /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
