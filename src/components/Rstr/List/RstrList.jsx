import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import RstrCard from "./RstrCard";

const RstrListContainer = styled.div`
    padding: 0 1rem;
    width: 100%;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    .total-rstr-num {
        font-size: 0.75rem;
        color: ${palette.darygray};
        margin: 1rem;
        text-align: right;
    }
`

const RstrCards = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const PageButton = styled.button`
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    background-color: ${({ active }) => active ? '#333' : '#ccc'};
    color: ${({ active }) => active ? '#fff' : '#000'};
    cursor: pointer;
`;

const RstrList = () => {

    const [rstrList, setrstrList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;
    const pageCount = Math.ceil(rstrList.length / pageSize);
    const currentPageData = rstrList.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    return (
        <RstrListContainer>
            <div className='total-rstr-num'>{`약 ${210}건`}</div>
            <RstrCards>
                <RstrCard />
                <RstrCard />
                <RstrCard />
                <RstrCard />
                <RstrCard />
            </RstrCards>
            <div>
                <Pagination>
                    {[...Array(pageCount)].map((_, index) => (
                        <PageButton key={index} onClick={() => handlePageChange(index + 1)} active={currentPage === index + 1}>
                            {index + 1}
                        </PageButton>
                    ))}
                </Pagination>
            </div>
        </RstrListContainer>
    )
}

export default RstrList;