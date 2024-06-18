import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import UserDashboard from './pages/user/UserDashboard';
import DashboardOverview from './components/administrator/dashboardOverview/DashboardOverview';
import UserManagement from './components/administrator/userManagement/UserManagement';
import MessageManagement from './components/administrator/messageManagement/MessageManagement';
import Settings from './components/administrator/settings/Settings';
import Reports from './components/administrator/reports/Reports';
import AdminDashboard from './pages/administrator/AdminDashboard';
import { useAuth } from './context/AuthContext';
import { UserComponent } from './components/user/userComponent/UserComponent';
import { OtherUserComponent } from './components/user/otherUserComponent/OtherUserComponent';

function App() {
  const { role } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {role === 'ADMIN' && (
        <Route path="/admin/dashboard/*" element={<AdminDashboard />}>
          <Route path="overview" element={<DashboardOverview />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="messages" element={<MessageManagement />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      )}
      {role === 'USER' && (
        <Route path="/user/dashboard" element={<UserDashboard />}>
          <Route path="user" element={<UserComponent />} />
          <Route path="other" element={<OtherUserComponent />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;

