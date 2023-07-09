import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Links from "./components/Links";
import AppRoutes from "./components/Routes";

function App() {
  return (
    <Router>
      <Links />
      <AppRoutes />
    </Router>
  );
}

export default App;
