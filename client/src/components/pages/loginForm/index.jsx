import React, { useState } from 'react'
import './style.css'
import Input from '../../base/input'
import Button from '../../base/button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigation = useNavigate();

    const handleEmail = (e) => {
        setEmail(e)
    }
    const handlePassword = (e) => {
        setPassword(e)
    }

    const [error, setError] = useState(null);

    const loginHandler = async () => {
        const credentials = {
            email,
            password
        }
        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/api/guest/login",
            credentials
          );
          localStorage.setItem("access_token", response.data.authorisation.token);
    
    
          navigation('/');
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
      };

    return (
        <div className="container">
            <>
                <Input label={"Email"} onChange={(e) => handleEmail(e)}/>
                <Input label={"Password"} type='password' onChange={(e) => handlePassword(e)}/>
            </>
            {error && <p>{error}</p>}
            <Button
            text={"Login"}
            onClick={() => loginHandler()}
            />
        </div>
    )
}

export default Login;