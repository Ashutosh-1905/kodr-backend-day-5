import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
