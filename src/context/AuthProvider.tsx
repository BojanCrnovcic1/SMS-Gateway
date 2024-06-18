import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [role, setRole] = useState<string | null>(localStorage.getItem('role'));
    const navigate = useNavigate();

    useEffect(() => {
        if (token && role === 'ADMIN' && !window.location.pathname.startsWith('/admin/dashboard')) {
          navigate('/admin/dashboard');
        } else if (token && role === 'USER' && !window.location.pathname.startsWith('/user/dashboard')) {
          navigate('/user/dashboard');
        }
      }, [token, role, navigate]);

    const login = async (msisdn: string, password: string) => {
        try {
            const response = await axios.post('http://185.244.129.34:8094/api/v1/auth/login', {
                msisdn,
                password,
            });

            const { token, role } = response.data;
            setToken(token);
            setRole(role);
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);

            await generateApiKey(token);

            if (role === 'ADMIN') {
                navigate('/admin/dashboard');
            } else {
                navigate('/user/dashboard');
            }
        } catch (error) {
            console.error('Login failed:', error);
            throw new Error('Login failed. Please check your credentials.');
        }
    };

    const generateApiKey = async (token: string) => {
        try {
            const response = await axios.get('http://185.244.129.34:8094/api/v1/generate-api-key', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('API Key generated:', response.data);
        } catch (error) {
            console.error('Failed to generate API Key:', error);
            if (axios.isAxiosError(error)) {
                console.error('Error message:', error.message);
                console.error('Error response:', error.response);
                if (error.response && error.response.status === 403) {
                    throw new Error('You are not authorized to generate an API Key.');
                }
            }
        }
    };

    const logout = () => {
        setToken(null);
        setRole(null);
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ token, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
