import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import AuthLogo from "./AuthLogo"

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';

const SignUpForm = () => {
    const navigate = useNavigate();

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [birthDate, setBirthDate] = useState(dayjs());
    const [showPassword, setShowPassword] = useState(false);


    const onClickSignUp = async () => {
        try {
            const response = await axios.post("https://localhost:8080", {
                username: id,
                password: password,
                name: name,
                phone: phoneNum,
                birth: birthDate,
            });
            console.log(response.data);
            alert("푸드남도 회원가입을 축하합니다!");
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    const onChangeDate = (newDate) => {
        setBirthDate(dayjs(newDate));
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="auth-form-container centered-flex">
            <AuthLogo />
            <div className="auth-form">
                <div className="input-form">
                    <PersonIcon className="icons" />
                    <input
                        type="text"
                        value={id}
                        placeholder="아이디"
                        required
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div className="input-form">
                    <LockIcon className="icons" />
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        placeholder="비밀번호"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {showPassword ? (
                        <VisibilityOutlinedIcon
                            className="icons"
                            onClick={toggleShowPassword}
                            style={{ color: "#FFD93D" }}
                        />
                    ) : (
                        <VisibilityOffOutlinedIcon className="icons" onClick={toggleShowPassword} />
                    )}
                </div>
                <div className="input-form">
                    <PersonIcon className="icons" />
                    <input
                        type="text"
                        value={name}
                        placeholder="이름"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-form">
                    <PersonIcon className="icons" />
                    <input
                        type="text"
                        value={nickname}
                        placeholder="닉네임"
                        required
                        onChange={(e) => setNickname(e.target.value)}
                    />
                </div>
                <div className="input-form">
                    <PhoneIcon className="icons" />
                    <input
                        type="text"
                        value={phoneNum}
                        placeholder="전화번호"
                        required
                        onChange={(e) => setPhoneNum(e.target.value)}
                    />
                </div>
                <div className="input-form">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="생년월일"
                            value={birthDate}
                            onChange={onChangeDate}
                            maxDate={dayjs()}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    sx={{
                                        '& .MuiInputBase-input': { color: 'blue', fontWeight: 'bold' },
                                        '& .MuiInputBase-root': { backgroundColor: '#f3f3f3', borderRadius: '10px' },
                                        '& .MuiOutlinedInput-notchedOutline': { borderColor: 'green' },
                                        ':hover .MuiOutlinedInput-notchedOutline': { borderColor: 'red' },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'purple', borderWidth: 2 },
                                    }}
                                />
                            )}
                        />
                    </LocalizationProvider>
                </div>
                <div className="auth-button" onClick={onClickSignUp}>
                    회원가입
                </div>
            </div>
        </div >
    );
}

export default SignUpForm;
