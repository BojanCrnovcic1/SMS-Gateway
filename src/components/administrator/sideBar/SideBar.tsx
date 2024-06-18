import { Link, useNavigate } from 'react-router-dom';
import './sideBar.scss';
import { useAuth } from '../../../context/AuthContext';

const SideBar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
     <div className='sidebar'>
        <div className='sidebar-container'>
            <ul>
                <li><Link to={'/admin/dashboard/overview'}>Overview</Link></li>
                <li><Link to={'/admin/dashboard/users'}>Users</Link></li>
                <li><Link to={'/admin/dashboard/messages'}>Messages</Link></li>
                <li><Link to={'/admin/dashboard/settings'}>Settings</Link></li>
                <li><Link to={'/admin/dashboard/reports'}>Reports</Link></li>
            </ul>
        </div>
        <div className='sidebar-logout'>
             <button type='button' onClick={() => handleLogout()}>Logout</button>
        </div>
     </div>
  )
}

export default SideBar;