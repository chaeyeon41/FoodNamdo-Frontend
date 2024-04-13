import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../styles/palette';

const menuItemList = [
    {
        title: '상세정보',
        path: `/rstr/${1}`
    },
    {
        title: '리뷰',
        path: '/'
    },
];

const TabsContainer = styled.div`
    margin-top: 3rem;
    width: 100%;
`;

const TabsHeader = styled.div`
    display: flex;
    text-align: center;
`;

const Tab = styled.div`
    font-family: 'Gmarket Sans Medium';
    width: 50%;
    border-radius: 10px 10px 0 0;
    padding: 0.7rem;
    cursor: pointer;
    background-color: ${(props) => (props.to === props.currentPath ? `${palette.lightblue}` : `${palette.lightgray}`)};
    color: ${(props) => (props.to === props.currentPath ? `black` : `${palette.gray}`)};
`;

const RstrTabBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handlePage = (path) => {
        navigate(path);
    }

    return (
        <TabsContainer>
            <TabsHeader>
                {
                    menuItemList.map((item, index) => (
                        <Tab
                            key={index}
                            to={item.path}
                            currentPath={location.pathname}
                            onClick={() => handlePage(item.path)}
                        >{item.title}</Tab>
                    ))
                }
            </TabsHeader>
        </TabsContainer>
    )
}

export default RstrTabBar;