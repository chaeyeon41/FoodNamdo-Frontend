import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import RstrList from "../components/Rstr/List/RstrList";
const RstrListPageContainer = styled.div`
    display: flex;
`;

const CategoryBar = styled.div`
    width: 20%;
    background: pink;
`

export const RstrListPage = () => {
    return (
        <RstrListPageContainer className={'common-container'} style={{ fontFamily: 'Gmarket Sans Medium' }}>
            <CategoryBar>카테고리바 위치</CategoryBar>
            <RstrList></RstrList>
        </RstrListPageContainer>
    )
}

export default RstrListPage;