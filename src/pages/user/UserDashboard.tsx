import { Outlet } from 'react-router-dom'
import UserSideBar from '../../components/user/sideBar/UserSideBar'
import './userDashboard.scss'

const UserDashboard = () => {
  return (
    <div className='user-dashboard'>
       <UserSideBar/>
       <div className='user-container'>
           <div className='main-content'>
               <h1>User Dashboard</h1>
           </div>
           <div className='content'>
               <Outlet />
           </div>
           </div>
     </div>
 )
}

export default UserDashboard