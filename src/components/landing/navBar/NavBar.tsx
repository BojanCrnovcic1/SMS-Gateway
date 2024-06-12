import { Link } from 'react-router-dom';
import './navBar.scss';

const NavBar = () => {

    
  return (
    <div className='navbar'>
        <div className='left'>
            <div className='title'>
                <div className='app-logo'>logo</div>
                <div className='app-name'>Naziv aplikacije</div>
            </div>
        </div>
        <div className='right'>
            <div className='navbar-links'>
                <ul>
                    <li className='list-pricing'><a href='#pricing'>Pricing</a></li>
                    <li className='list-about'><a href='#aboutAs'>AboutAS</a></li>
                    <li className='list-login'><Link to={'/login'}>Login</Link></li>
                    <li className='list-register'><Link to={'/register'}>Register</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar;