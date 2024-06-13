import { Link } from 'react-router-dom';
import './sideBar.scss';

const SideBar = () => {

  return (
     <div className='sidebar'>
        <div className='sidebar-container'>
            <ul>
                <li><Link to={'/admin/overview'}>Overview</Link></li>
                <li><Link to={'/admin/users'}>Users</Link></li>
                <li><Link to={'/admin/messages'}>Messages</Link></li>
                <li><Link to={'/admin/settings'}>Settings</Link></li>
                <li><Link to={'/admin/reports'}>Reports</Link></li>
            </ul>
        </div>
     </div>
  )
}

export default SideBar;