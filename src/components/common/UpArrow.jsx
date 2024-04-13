import styled from "styled-components";
import palette from '../../styles/palette';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const UpArrowContainer = styled.div`
    border: 1px solid black;
`;

const StyledIcon = styled(ArrowCircleUpIcon)`
    color: ${palette.darkblue1};
    margin-bottom: -6px;
    position: fixed;
    bottom: 50px;
`;

const UpArrow = () => {
    const MoveToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <UpArrowContainer>
            <StyledIcon onClick={MoveToTop} style={{ fontSize: '3.5rem' }} />
        </UpArrowContainer>
    )
}

export default UpArrow;
