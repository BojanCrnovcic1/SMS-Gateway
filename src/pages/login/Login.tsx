import './login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';



const Login = () => {
    const [msisdn, setMsisdn] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [messageError, setMessageError] = useState<string>("");
    const { login } = useAuth()

    const doLogin = async () => {
        try {

           await login(msisdn, password);

        } catch (error) {
            console.error('Login failed:', error);
            setMessageError('Login failed. Please check your credentials.');
        }
    };

    

    return (
        <div className='login'>
            <div className='login-container'>
                <div className='login-card'>
                    <h1>Login</h1>
                    <form>
                        <input type='text' id='phoneNumber' value={msisdn} placeholder='Phone number'
                            onChange={(e) => setMsisdn(e.target.value)} />
                        <input type='password' id='password' value={password} placeholder='******'
                            onChange={(e) => setPassword(e.target.value)} />
                        <button type='button' onClick={doLogin}>Login</button>
                    </form>
                    {messageError && <div className="error">{messageError}</div>}
                    <div className='register-back'>
                        <span>Don't you have an account?</span>
                        <Link to={'/register'}>
                            <p>Click here...</p>
                        </Link>
                    </div>
                </div>
                <div className='go-back'>
                    <Link to={'/'}>
                        <FontAwesomeIcon icon={faBackward} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;

