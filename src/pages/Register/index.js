import React from 'react';
import { RegisterBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import './register.scss';

const Register = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img className="bg-image" src={RegisterBg} alt="register-bg"/>
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name"/>
                <Gap height={16} />
                <Input label="Email" placeholder="Email"/>
                <Gap height={16} />
                <Input label="Password" placeholder="Password"/>
                <Gap height={50}/>
                <Button title="REGISTER"/>
                <Gap height={80}/>
                <Link title="kembali ke login"/>
            </div>
        </div>
    )
}

export default Register
