import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/homeLayout";

const Main = lazy(() => import("../src/pages/main"));
const About = lazy(() => import("../src/pages/about"));
const Payment = lazy(() => import("../src/pages/payments"));
const Rules = lazy(() => import("../src/pages/rules"));
const Calculate = lazy(() => import("../src/pages/calculate"));
const Help = lazy(() => import("../src/pages/help"));





const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainLayout />}
        >
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Main /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
          <Route path="/payments" element={<Suspense fallback={<div>Loading...</div>}><Payment /></Suspense>} />
          <Route path="/rules" element={<Suspense fallback={<div>Loading...</div>}><Rules /></Suspense>} />
          <Route path="/calculate" element={<Suspense fallback={<div>Loading...</div>}><Calculate /></Suspense>} />
          <Route path="/support" element={<Suspense fallback={<div>Loading...</div>}><Help /></Suspense>} />



        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;