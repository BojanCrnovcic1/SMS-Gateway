import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    const user = [
        {
            id: 2,
            username: "pero",
            email: "pero@gmail.com",
            password: "pero1234"
        },
        {
            id: 3,
            username: "miro",
            email: "miro@gmail.com",
            password: "miro12345"
        }
    ]

    const admin = [
        {
            id: 1,
            username: "admin1234",
            email: "admin@gmail.com",
            password: "admin1234"
        }
    ]

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [messageError, setMessageError] = useState<string>("");

    const navigate = useNavigate();

    const handleLogin = () => {
        const foundUser = user.find(u => u.username === username && u.email === email && u.password === password);
        const foundAdmin = admin.find(a => a.username === username && a.email === email && a.password === password);

        if (foundUser) {
            navigate('/user/dashboard');
        } else if (foundAdmin) {
            navigate('/admin');
        } else {
            setMessageError("Invalid credentials");
        }
    }

    return (
        <div className='login'>
            <div className='login-container'>
                <div className='login-card'>
                    <h1>Login</h1>
                    <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                        <input type='text' id='username' value={username} placeholder='username'
                               onChange={(e) => setUsername(e.target.value)} />
                        <input type='email' id='email' value={email} placeholder='email'
                               onChange={(e) => setEmail(e.target.value)} />
                        <input type='password' id='password' value={password} placeholder='******'
                               onChange={(e) => setPassword(e.target.value)} />
                        <button type='submit'>Login</button>
                    </form>
                    {messageError && <div className="error">{messageError}</div>}
                    <div className='register-back'>
                        <span>Don't you have an account?</span>
                        <Link to={'/register'}>
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

export default Login;
