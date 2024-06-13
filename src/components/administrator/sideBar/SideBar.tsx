import { Link } from 'react-router-dom';
import './sideBar.scss';

const SideBar = () => {

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
     </div>
  )
}

export default SideBar;