import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Links from "./Links";
import AppRoutes from "./Routes";

function App() {
  return (
    <Router>
      <Links />
      <AppRoutes />
    </Router>
  );
}

export default App;
