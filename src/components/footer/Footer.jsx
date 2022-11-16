import React from 'react';
import styled from 'styled-components';
import footerLogo from '../../assets/footerLogo.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';


const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterItems>
          <FooterLogo src={footerLogo} alt="" />
          <FooterSocial>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </FooterSocial>
          <FooterP>© 2021 Metabnb. All rights reserved.</FooterP>
        </FooterItems>

        <FooterItems>
          <FooterH1>Community</FooterH1>
          <FooterLinks>
            <FooterLink href="#">NFT</FooterLink>
            <FooterLink href="#">Tokens</FooterLink>
            <FooterLink href="#">Landlords</FooterLink>
            <FooterLink href="#">Discord</FooterLink>
          </FooterLinks>
        </FooterItems>

        <FooterItems>
          <FooterH1>Places</FooterH1>
          <FooterLinks>
            <FooterLink href="#">Castles</FooterLink>
            <FooterLink href="#">Farms</FooterLink>
            <FooterLink href="#">Beach</FooterLink>
            <FooterLink href="#">Learn more</FooterLink>
          </FooterLinks>
        </FooterItems>

        <FooterItems>
          <FooterH1>About us</FooterH1>
          <FooterLinks>
            <FooterLink href="#">Road map</FooterLink>
            <FooterLink href="#">Creators</FooterLink>
            <FooterLink href="#">Career</FooterLink>
            <FooterLink href="#">Contact us</FooterLink>
          </FooterLinks>
        </FooterItems>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer


const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 
  background: #1d1d1e;
  border: 1px solid #000000;
  color: #fff;
  padding: 0 5rem;

  @media screen and (max-width: 912px) {
    padding: 0 2rem;
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    padding: 0 1rem;
    flex-direction: column;
  }



`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0px -5rem;
  color: #fff;
  gap: 90px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (max-width: 912px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const FooterItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    justify-content: flex-start;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    `;

const FooterLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* margin-bottom: 200px; */
  margin-bottom: 140px;
  color: #fff;

  @media screen and (max-width: 768px) {
    margin-bottom: 60px;
    width: 50%;
    img {
      width: 100px;
      height: 100px;
    }
  }

  @media screen and (max-width: 912px) {
    margin-bottom: 60px;
    width: 50%;
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

const FooterSocial = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin-top: -40px;
  margin-bottom: 40px;
  height: 100%;
  gap: 30px;
  transition: 0.3s ease-in-out;
  img {
    object-fit: cover;
  }

  img:hover {
    transform: scale(1.3);
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    margin-top: -20px;
    margin-bottom: 20px;
    gap: 10px;
    width: 40%;
  }

  @media screen and (max-width: 912px) {
    margin-top: -20px;
    margin-bottom: 20px;
    gap: 10px;
    width: 40%;
  }
`;

const FooterP = styled.p`
  font-size: 1rem;
  width: 100%;
  margin-top: 20px;
`;

const FooterH1 = styled.h1`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 64px;
  color: #fff;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 20px;
  transition: 0.3s ease-in-out;
  font-weight: 400;
  font-size: 14px;
  &:hover {
    color: #a02279;
    transition: 0.3s ease-in-out;
  }
`;

const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 50%;
    height: 100%;
    `;