import React from 'react';
import RstrDetailMain from './RstrDetailMain';
import RstrTabBar from './RstrTabBar';
import UpArrow from '../../../components/common/UpArrow';
import "../../../styles/common.css";

const RstrDetail = () => {
    return (
        <>
            <RstrDetailMain />
            <RstrTabBar />
            <UpArrow />
        </>
    )
}

export default RstrDetail;