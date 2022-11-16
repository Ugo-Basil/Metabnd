import styled from "styled-components";


const NavBarContainer = styled.div` 
    width: 100%;
    height: 60px;
    box-shadow: 0 1px 3px rgba(15,15,15,0.13);
    display: flex;
    align-items: center;
    padding: 0 5rem;
`;

const LeftSection = styled.div`
    display: flex;
`;


const MidSection = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: center;

`;

const RightSection = styled.div`
    display: flex;
   
    
`;

export { NavBarContainer, LeftSection, MidSection, RightSection };
