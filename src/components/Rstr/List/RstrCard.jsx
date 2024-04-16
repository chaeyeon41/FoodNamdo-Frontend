import React from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import StarIcon from '@mui/icons-material/Star';

const RstrCardContainer = styled.div`
    margin: 0.3rem;
    padding: 0.5rem;
    width: 10.6rem;
    border-radius: 10px;
    background-color: ${palette.lightblue};
`
const ImgContainer = styled.div`
    width: 100%;
    height: 10rem;
    overflow: hidden;
    border-radius: 10px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%; // 높이도 100%로 설정합니다.
    object-fit: cover; // 컨테이너에 꽉 차게 조정
`;
const RstrInfo = styled.div`
    display: flex;
    &.title {    
        padding: 0.5rem 0;
        font-family: 'Gmarket Sans Bold';
        justify-content: center;
        font-size: 1rem;
    }

    &.info {
        justify-content: space-between;
        display: flex;
        font-size: 0.75rem;
    }

    &.info .rating {
        display: flex;
    }
`;

const StyledStarIcon = styled(StarIcon)`
    color: ${palette.yellow};
`;

const RstrCard = () => {
    return (
        <RstrCardContainer>
            <ImgContainer>
                <Img src={'/img/cat1.jpg'} alt={'이미지'} />
            </ImgContainer>
            <RstrInfo className='title'>
                {'금오식육식당'}
            </RstrInfo>
            <RstrInfo className='info'>
                <div>{'식육(숯불구이)'}</div>
                <div className='rating'>
                    <StyledStarIcon />
                    <div>
                        {`${4.9}(${10})`}
                    </div>
                </div>
            </RstrInfo>
        </RstrCardContainer>
    )
}

export default RstrCard;