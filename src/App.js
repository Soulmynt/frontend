import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from './pages/signIn';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                {/* ... other routes */}
            </Routes>
        </Router>
    );
}

export default App;