import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RstrDetailMain from '../../../components/Rstr/Detail/RstrDetailMain';
import RstrTabBar from '../../../components/Rstr/Detail/RstrTabBar';
import RstrDetailInfo from './RstrDetailInfo';

// import UpArrow from '../../../components/common/UpArrow';
import "../../../styles/common.css";

const RstrDetail = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handlePage = (path) => {
        navigate(path);
    }

    return (
        <>
            <RstrDetailMain />
            <RstrTabBar />
            {/* <UpArrow /> */}
            {
                location.pathname === '/review' ?
                    <RstrTabBar />
                    : <RstrDetailInfo />
            }

        </>
    )
}

export default RstrDetail;