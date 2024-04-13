import React from 'react';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div className='auth-form-container centered-flex'>
            <Link to={'/'}>
                <img src={process.env.PUBLIC_URL + '/logo.png'} />
            </Link>
            <form
                className="auth-form"
                action="http://localhost:8080/login"
                method="POST"
            >
                <div className="input-form">
                    <PersonOutlinedIcon className="icons" />
                    <input
                        name="username"
                        type="text"
                        required
                        placeholder="아이디"
                    />
                </div>
                <div className="input-form">
                    <LockOutlinedIcon className="icons" />
                    <input
                        name="password"
                        type="password"
                        required
                        placeholder="비밀번호"
                    />
                </div>
                <button type="submit" className="auth-button">
                    로그인
                </button>
            </form>
            <div>

            </div>
        </div>
    );
};

export default LoginForm;
