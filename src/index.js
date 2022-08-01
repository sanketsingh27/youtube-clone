import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { makeServer } from "./server";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Explore from "./pages/Explore";
import MockApi from "./pages/MockApi";
import Layout from "./components/Layout";
import PageNotFound from "./pages/PageNotFound";

// Call make Server

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="mock-api" element={<MockApi />} />

        <Route element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="explore" element={<Explore />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
