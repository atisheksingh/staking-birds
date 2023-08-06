import React from "react";
import AppRoutes from "./routes";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" />
      <AppRoutes />
    </>
  )
};

export default App;