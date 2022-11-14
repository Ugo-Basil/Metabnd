import styled from "styled-components";
import logo from "../../assets/meta-logo.png";

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImage = styled.div`
    width: 30px;
    height: 30px;

    img {
        width: 150px;
        height: 150px auto;
    }
`;

export function Logo(props)
{
    return (
        <LogoWrapper>
            <LogoImage>
                <img src={logo} alt="logo" />
            </LogoImage>
        </LogoWrapper>
    );
}