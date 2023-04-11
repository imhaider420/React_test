import React from "react";
import NavScroll from "./NavScroll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Vehicles from "./Pages/Vehicles";
import MazdaOwners from "./Pages/MazdaOwners";
import Error from "./Pages/Error";
import CertifiedPreOwned from "./Pages/CertifiedPre-Owned";
import Shopping from "./Pages/Shopping";
import ContactUs from "./Pages/ContactUs";
import BuildPrice from "./Pages/BuildPrice";
import FindRetailer from "./Pages/FindRetailer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavScroll />} />
          <Route path="/Home" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/Vehicles" element={<Vehicles />} />
          <Route path="/MazdaOwners" element={<MazdaOwners />} />
          <Route path="/CertifiedPre-Owned" element={<CertifiedPreOwned />} />
          <Route path="/Shopping" element={<Shopping />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/BuildPrice" element={<BuildPrice />} />
          <Route path="/FindRetailer" element={<FindRetailer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
