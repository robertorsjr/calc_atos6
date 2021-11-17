import React from 'react';
import {Home} from "./src/screens";
import {ThemeProvider} from "./src/contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
  );
}

