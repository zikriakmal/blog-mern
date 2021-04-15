import React from 'react'
import { RegisterBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import './login.scss';

const Login = () => {
    return (
        <div>
            <div className="main-page">
            <div className="left">
                <img className="bg-image" src={RegisterBg} alt="register-bg"/>
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email"/>
                <Gap height={16} />
                <Input label="Password" placeholder="Password"/>
                <Gap height={50}/>
                <Button title="login"/>
                <Gap height={80}/>
                <Link title="mari register"/>
            </div>
        </div>
        </div>
    )
}

export default Login
