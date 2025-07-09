// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeForm from './features/employees/EmployeeForm';
import EmployeeTable from './features/employees/EmployeeTable';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<EmployeeTable />} />
        <Route path="/add" element={<EmployeeForm />} />
        <Route path="/edit/:id" element={<EmployeeForm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
