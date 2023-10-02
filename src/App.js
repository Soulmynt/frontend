import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./pages/signIn";
import { Staging } from "./pages/staging";
import { Dashboard } from "./pages/dashboard";
import { Create } from "./pages/create";
import { MyGroups } from "./pages/mygroups";
import { Explore } from "./pages/explore";
import { Profile } from "./pages/profile";
import { Settings } from "./pages/settings";
import { RequireAuth } from "./components/AuthRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/*  Public Routes */}
        <Route path="/register" element={<Register />} />

        {/* Protected Routes*/}
        {/*<Route element={<RequireAuth />}>*/}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/mygroups" element={<MyGroups />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        {/* </Route>}*/}
        {/* ... other routes */}
        <Route path="/staging" element={<Staging />} />
      </Routes>
    </Router>
  );
}

export default App;
