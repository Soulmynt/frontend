import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./pages/signIn";
import { Staging } from "./pages/staging";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        {/* ... other routes */}
        {/*<Route path="/staging" element={<Staging />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
