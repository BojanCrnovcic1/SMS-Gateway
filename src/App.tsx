import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from './pages/landing/LandingPage'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import UserDashboard from './pages/user/UserDashboard'
import AdminDashboard from './pages/administrator/AdminDashboard'
import DashboardOverview from './components/administrator/dashboardOverview/DashboardOverview'
import UserManagement from './components/administrator/userManagement/UserManagement'
import MessageManagement from './components/administrator/messageManagement/MessageManagement'
import Settings from './components/administrator/settings/Settings'
import Reports from './components/administrator/reports/Reports'


function App() {

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/user/dashboard",
      element: <UserDashboard />
    },
    {
      path: "/admin",
      element: <AdminDashboard />,
      children: [
        {
          path: "overview",
          element: <DashboardOverview />
        },
        {
          path: "users",
          element: <UserManagement />
        },
        {
          path: "messages",
          element: <MessageManagement />
        },
        {
          path: "settings",
          element: <Settings />
        },
        {
          path: "reports",
          element: <Reports />
        }
      ]
    }
  ])

  return (
     <div>
      <RouterProvider router={router} />
     </div>
  )
}

export default App;
