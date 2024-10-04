import { useState } from 'react';
import mainvideo2 from '/video2.mp4';
import '../style/signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({setLoginUser}) => {
    const navigate = useNavigate();
    const handleSignup = () => {
        navigate('/signup');
    };
    

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message);
                setLoginUser(res.data.user);
                navigate('/jyotirling/src/components/files/main.jsx'); // Adjust the path to your actual dashboard or home page route
            });
    };

    return (
        <div className='container'>
            <div className='Vid'>
                <video width="100%" loop muted autoPlay>
                    <source src={mainvideo2} type="video/mp4" />
                </video>
                <div className='inner-form'>
                    <div className='Head'>Login</div>
                    {console.log(user)}
                    <div className='underline'></div>
                    <input type="text" name='email' value={user.email} className='text' placeholder='email' onChange={handleChange} />
                    <input type="password" name='password' value={user.password} className='text' placeholder='password' onChange={handleChange} />
                    <div className='btns'>
                        <button type='submit' onClick={login} className='btn'>Login</button>
                        <button type='submit' onClick={handleSignup} className='btn'>Signup</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
