import { useEffect, useState } from 'react';
import './dashboardOverview.scss';
import { User } from '../../../types/User';
import axios from 'axios';

const DashboardOverview = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [messageError, setMessageError] = useState<string>("");

  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get<User[]>('http://185.244.129.34:8094/api/v1/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
                setMessageError('Failed to fetch users.');
    }
  }
  return ( 
    <div className='overview'>
        <h1>Registered Users</h1>
            {messageError && <div className="error">{messageError}</div>}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.msisdn}</td>
                            <td>{user.mail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default DashboardOverview;