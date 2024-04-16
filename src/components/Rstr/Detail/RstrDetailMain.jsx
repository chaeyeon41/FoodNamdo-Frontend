import React from 'react';
import styled from 'styled-components';
import RstrImgCarusel from '../../../components/Rstr/Detail/RstrImgCarusel';
import RstrBriefInfo from '../../../components/Rstr/Detail/RstrBriefInfo';

const RstrDetailMainContainer = styled.div`

`;

const RstrDetailMain = () => {
    return (
        <RstrDetailMainContainer
            style={{ fontFamily: 'Gmarket Sans Medium' }}
        >
            <div style={{ margin: '5px 50px', fontSize: '0.8rem' }}>
                <span>경상남도</span>
                <span> | </span>
                <span>한식</span>
            </div>
            <div style={{ display: 'flex' }}>
                <RstrImgCarusel />
                <RstrBriefInfo />
            </div>
        </RstrDetailMainContainer>
    )
}

export default RstrDetailMain;
