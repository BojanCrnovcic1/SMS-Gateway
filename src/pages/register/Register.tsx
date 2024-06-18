import { useState } from 'react';
import './register.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { ApiConfig } from '../../config/apiConfig';

interface RegisterProps {
    firstName: string;
    lastName: string;
    msisdn: string;
    mail: string;
    password: string;
}

const Register = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [msisdn, setMsisdn] = useState<string>("");
    const [mail, setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [messageError, setMessageError] = useState<string>("");
    const navigate = useNavigate();

    const doRegister = async () => {
        try {
            const response = await axios.post<RegisterProps>(ApiConfig.API_URL + 'auth/register', {
                firstName,
                lastName,
                msisdn,
                mail,
                password,
            });
            console.log('Registration successful:', response.data);
            navigate('/login')
        } catch (error) {
            console.error('Registration failed:', error);
            setMessageError('Registration failed. Please check your details and try again.');
        }
    };
    

    return (
        <div className='register'>
            <div className='register-container'>
                <div className='register-card'>
                    <h1>Register</h1>
                    <form>
                        <input type='text' id='firstName' value={firstName} placeholder='First name'
                               onChange={(e) => setFirstName(e.target.value)} />
                        <input type='text' id='LastName' value={lastName} placeholder='Last name'
                               onChange={(e) => setLastName(e.target.value)} />
                        <input type='text' id='msisdn' value={msisdn} placeholder='Phone number'
                               onChange={(e) => setMsisdn(e.target.value)} />
                        <input type='email' id='email' value={mail} placeholder='Email'
                               onChange={(e) => setMail(e.target.value)} />
                        <input type='password' id='password' value={password} placeholder='******'
                               onChange={(e) => setPassword(e.target.value)} />
                        <button type='button' onClick={() => doRegister()}>Register</button>
                    </form>
                    {messageError && <div className="error">{messageError}</div>}
                    <div className='register-back'>
                        <span>Do you have an account?</span>
                        <Link to={'/login'}>
                             <p> click here...</p>
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
    )
}

export default Register;
