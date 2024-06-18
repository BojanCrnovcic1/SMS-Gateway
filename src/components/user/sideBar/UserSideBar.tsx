import { Link, useNavigate } from 'react-router-dom';
import '../../administrator/sideBar/sideBar.scss';
import { useAuth } from '../../../context/AuthContext';
const UserSideBar = () => {
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
                  <li><Link to={'/user/dashboard/user'}>User comp</Link></li>
                  <li><Link to={'/user/dashboard/other'}>Other</Link></li>
                  
              </ul>
          </div>
          <div className='sidebar-logout'>
               <button type='button' onClick={() => handleLogout()}>Logout</button>
          </div>
       </div>
    )
}

export default UserSideBar