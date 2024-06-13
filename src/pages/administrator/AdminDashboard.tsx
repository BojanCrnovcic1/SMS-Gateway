import { Outlet } from 'react-router-dom';
import './adminDashboard.scss';
import SideBar from '../../components/administrator/sideBar/SideBar';

const AdminDashboard = () => {
  return (
     <div className='admin-dashboard'>
        <SideBar />
        <div className='admin-container'>
            <div className='main-content'>
                <h1>Administrator dashboard</h1>
            </div>
            <div className='content'>
                <Outlet />
            </div>
            </div>
      </div>
  )
}

export default AdminDashboard;