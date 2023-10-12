import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Income } from "./pages/Income/Income";
function App() {
  return (
    <div className="main">
      <Sidebar />
      <div className="main__body">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/income" element={<Income />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
