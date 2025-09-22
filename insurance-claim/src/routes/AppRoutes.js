
import { Routes, Route, Navigate } from 'react-router-dom';
import CustomerDashboard from '../pages/CustomerDashboard';
import Login from '../pages/Login';
import AdminDashboard from '../pages/AdminDashboard';

function AppRoutes({user, setUser}) {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      {user && user.role === 'customer' && (
        <Route path="/customer" element={<CustomerDashboard user={user} />} />
      )}
      {user && user.role === 'admin' && (
        <Route path="/admin" element={<AdminDashboard />} />
      )}
      <Route path="*" element={<h2>404 Not Found</h2>} />
    </Routes>
  );
}
export default AppRoutes;