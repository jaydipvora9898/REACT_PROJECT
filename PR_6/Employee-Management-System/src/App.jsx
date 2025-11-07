
import { Routes, Route } from 'react-router-dom';
import EmployeeManagement from './Component/Employee/Employee';
import EmployeeDetail from './Component/Employee/EmployeeDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeManagement />} />
      <Route path="/employee/:id" element={<EmployeeDetail />} />
    </Routes>
  );
}

export default App;
