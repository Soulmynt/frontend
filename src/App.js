import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./pages/signIn";
import { Staging } from "./pages/staging";
import {Dashboard} from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* ... other routes */}
        {/*<Route path="/staging" element={<Staging />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
