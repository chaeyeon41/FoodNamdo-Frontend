import React, { useState, useRef, useEffect } from "react";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

import { useNavigate } from 'react-router-dom';
import axios from "axios";
import AuthLogo from './components/AuthLogo';

const FindPwPage = () => {
    const navigate = useNavigate();
    const [focused, setFocused] = useState(null);
    const [account_id, setAccount_id] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [authNum, setAuthNum] = useState('');

    const onChangePhone = e => {
        const value = e.target.value;
        if (value === '' || /^[0-9]+$/.test(value)) {
            setPhone(value);
        } else {
            alert('숫자를 입력해 주세요.');
        }
    }

    const onChangeAuthNum = e => {
        const value = e.target.value;
        if (value === '' || (/^[0-9]+$/.test(value) && value.length <= 6)) {
            setAuthNum(value);
        } else {
            alert('인증번호는 6자리 숫자여야 합니다.');
        }
    }

    // 모든 필드가 채워져 있는지 확인하는 함수
    const isFormValid = () => {
        return (
            account_id && name && phone && authNum.length === 6
        );
    };

    const handleFindPw = async () => {
        try {
            const response = await axios.post("https://localhost:8080/member", {

            });
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="auth-form-container centered-flex">
            <AuthLogo />
            <div className="auth-form">
                <div className={`input-form ${focused === 'account_id' ? 'input-focus-form' : ''}`}>
                    <PersonOutlinedIcon className="icons" />
                    <input
                        type="text"
                        placeholder="아이디"
                        name="account_id"
                        value={account_id}
                        onChange={(e) => setAccount_id(e.target.value)}
                        onFocus={() => setFocused('account_id')}
                        onBlur={() => setFocused(null)}
                        autoFocus
                    />
                </div>
                <div className={`input-form ${focused === 'name' ? 'input-focus-form' : ''}`}>
                    <PersonOutlinedIcon className="icons" />
                    <input
                        type="text"
                        placeholder="이름"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                    />
                </div>
                <div className={`input-form ${focused === 'phone' ? 'input-focus-form' : ''}`}>
                    <LocalPhoneOutlinedIcon className="icons" />
                    <input
                        type="text"
                        placeholder="전화번호 11자리"
                        name="phone"
                        value={phone}
                        onChange={onChangePhone}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                        maxLength={11}
                    />
                    <div className="btn">
                        인증요청
                    </div>
                </div>
                <div className={`input-form ${focused === 'authNum' ? 'input-focus-form' : ''}`}>
                    <input
                        type="text"
                        placeholder="인증번호 6자리 숫자 입력"
                        name="authNum"
                        value={authNum}
                        onChange={onChangeAuthNum}
                        onFocus={() => setFocused('authNum')}
                        onBlur={() => setFocused(null)}
                        maxLength={6}
                    />
                </div>
                <button
                    className="auth-button"
                    onClick={handleFindPw}
                    disabled={!isFormValid()}
                    style={{ opacity: isFormValid() ? 1 : 0.5 }}
                >
                    비밀번호 찾기
                </button>
            </div>
        </div >
    );
}

export default FindPwPage;