import React from "react";
import { Route, Routes } from "react-router-dom";
import Sales from "../pages/Sales";
import Home from "../pages/Home";


function Router() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route path="/sales" element={<Sales />}>
        <Route path="payment" element={<Sales />} />
        <Route path="catalog" element={<Sales  />} />
        <Route path="variants/:id" element={<Sales  />} />
      </Route>
    </Routes>
  );
}

export default Router;
