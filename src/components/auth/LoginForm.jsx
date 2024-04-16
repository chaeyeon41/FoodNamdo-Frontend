import React from 'react';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AuthLogo from "./AuthLogo"
import { styled } from '@mui/system';

const StyledLink = styled(Link)({
    fontSize: '0.75rem',
    fontFamily: 'Gmarket Sans Medium',
    color: '#BEBEBE',
    marginRight: '16px',
})

const LoginForm = () => {

    return (
        <div className='auth-form-container centered-flex'>
            <AuthLogo />
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
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        typography: 'body1',
                    }}
                >
                    <StyledLink href="/find-id" underline="hover">
                        {'아이디 찾기'}
                    </StyledLink>
                    <StyledLink href="/find-pw" underline="hover">
                        {'비밀번호 찾기'}
                    </StyledLink>
                    <StyledLink href="/signup" underline="hover">
                        {'회원가입'}
                    </StyledLink>
                </Box>
            </div>
        </div>
    );
};

export default LoginForm;
