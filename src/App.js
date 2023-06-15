import { Routes, Route } from "react-router-dom";
import SideNavbar from "./components/SideNavbar";
import Employee from "./pages/Employee";
import Counter from "./pages/Counter";
import Shift from "./pages/Shift";
import CounterWork from "./pages/CounterWork";
import CheckIn from "./pages/CheckIn";

function App() {
  return (
    <div className="flex">
      <div className="w-1/6">
        <SideNavbar></SideNavbar>
      </div>
      
      <div className="w-5/6">
        <Routes>
          <Route path="/" element={<Employee />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Shift" element={<Shift />} />
          <Route path="/CounterWork" element={<CounterWork />} />
          <Route path="/CheckIn" element={<CheckIn />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;