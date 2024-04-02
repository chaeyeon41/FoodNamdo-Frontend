import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import RstrDetailInfo from './RstrDetailInfo';

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
    background-color: ${(props) => (props.tabValue === props.index ? `${palette.lightblue}` : `${palette.lightgray}`)};
    color: ${(props) => (props.tabValue === props.index ? `black` : `${palette.gray}`)};
`;

const TabPanel = styled.div`
    display: ${(props) => (props.isActive ? 'block' : 'none')};
    padding: 20px;
`;

const RstrTabBar = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleChange = (newValue) => {
        setTabValue(newValue);
    }

    return (
        <TabsContainer>
            <TabsHeader>
                <Tab
                    index={0}
                    tabValue={tabValue}
                    onClick={() => handleChange(0)}
                >상세설명</Tab>
                <Tab
                    index={1}
                    tabValue={tabValue}
                    onClick={() => handleChange(1)}
                >리뷰</Tab>
            </TabsHeader>
            <TabPanel isActive={tabValue === 0}><RstrDetailInfo /></TabPanel>
            <TabPanel isActive={tabValue === 1}>리뷰 컴포넌트 위치</TabPanel>
        </TabsContainer>
    )
}

export default RstrTabBar;