import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from './pages/landing/LandingPage'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import UserDashboard from './pages/user/UserDashboard'
import AdminDashboard from './pages/administrator/AdminDashboard'


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
      path: "/admin/dashboard",
      element: <AdminDashboard />
    }
  ])

  return (
     <div>
      <RouterProvider router={router} />
     </div>
  )
}

export default App;
