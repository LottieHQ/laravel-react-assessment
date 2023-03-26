import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Home from "./Home";

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Home />
    </LocalizationProvider>
  );
};

export default App;
