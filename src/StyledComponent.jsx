import styled, {css} from "styled-components";
// Box가 div 태그의 역할을 함. div 태그 스타일링
// or개념 연산자: 앞이 참이면 뒤의 값 보지 않겠다. 
const Box = styled.div` 
    background: ${props => props.color || 'blue'}; 
    padding: 1rem;
    display: flex;
    width:1024px;
    margin: 0 auto;
    @media(max-width: 1024px){
        width: 768px;
    }
    @media (max-width: 768px){
        width:90%;
    }
`;
const Button = styled.button`
    background: white;
    color: black;
    border-radius:4px;
    padding: .5rem;
    align-items:center;
    justify-content: center;
    box-sizing: border-box;
    font-size:1rem;
    font-weight: 600;
    &:hover{
        background : rgba(255,255,255,0.5);
    }
    
    ${(props) => props.inverted && css`
        background: none;
        border:2px solid white;
        color : white;
        &:hover{
            background:white;
            color:black;
        }
    `}
    // 인접한 버튼 간의 거리, 마진
    & + button {
        margin-left: 1rem;
    }

`;

const StyledComponent = () => {
    return (
        <Box color="orange">
        <Button>안녕</Button>
        <Button inverted={true}>테두리만</Button>
        </Box>
    );
};

export default StyledComponent;