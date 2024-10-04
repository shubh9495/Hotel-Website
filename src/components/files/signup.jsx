import { useState } from 'react';
import '../style/signup.css'
import './login.jsx'
import mainvideo2 from '/video2.mp4'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const [user , setUser] = useState({
        name:"",
        email:"",
        password:"",
        repassword:""
    });

    const handleChange = e => {
        const {name , value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const {name , email , password , repassword} = user
        if(name && email && password &&(password === repassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                console.log(res)
                alert("user regietered ")
                navigate('/login')
            })            
        }
        else{
            alert("invalid")
        }
    }

    const navigate = new useNavigate()

    const handlelogin = () => {
        navigate('/login');
    };
    

    return(
        <div className='container'>
            <div className='Vid'>
                <video width="100%" loop muted autoPlay>
                    <source src={mainvideo2} type ="video/mp4" /> 
                </video>


                <div className='inner-form'>
                    <div className='Head'>Sign up</div>
                    {console.log(user)}
                    <div className='underline'></div>
                    <input type="text"  name='name' value={user.name}  className='text'  placeholder='enter your name' onChange={handleChange}/>
                    <input type="text"  name='email' value={user.email}  className='text'  placeholder='email' onChange={handleChange}/>
                    <input type="text"  name='password' id = 'password' value={user.password}  className='text' placeholder='password' onChange={handleChange}/>
                    <input type="text"  name='repassword' value={user.repassword}  className='text' placeholder='re enter password' onChange={handleChange}/>
                    <div className='btns'>
                        <button type='Submit' className='btn' onClick={handlelogin}>login</button>
                        <button type='Submit' className='btn' onClick={register}>Signup</button>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default Signup