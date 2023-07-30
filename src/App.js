import React from "react";
import AppRoutes from "./routes";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Toaster />
      <AppRoutes />
    </>
  )
};

export default App;