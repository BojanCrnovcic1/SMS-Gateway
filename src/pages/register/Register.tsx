import { useState } from 'react';
import './register.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [messageError, setMessageError] = useState<string>("");

  return (
    <div className='register'>
            <div className='register-container'>
                <div className='register-card'>
                    <h1>Register</h1>
                    <form>
                        <input type='text' id='username' value={username} placeholder='username'
                               onChange={(e) => setUsername(e.target.value)} />
                        <input type='email' id='email' value={email} placeholder='email'
                               onChange={(e) => setEmail(e.target.value)} />
                        <input type='password' id='password' value={password} placeholder='******'
                               onChange={(e) => setPassword(e.target.value)} />
                        <button type='submit'>Register</button>
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

export default Register