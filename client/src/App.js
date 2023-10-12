import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Expense } from "./pages/Expense/Expense";
import { Income } from "./pages/Income/Income";
import { Savings } from "./pages/Savings/Savings";
function App() {
  return (
    <div className="main">
      <Sidebar />
      <div className="main__body">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/savings" element={<Savings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
