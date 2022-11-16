import React from 'react'
import styled from 'styled-components'
import MainImg from '../../assets/main.png'

const Section = () => {
  return (
    <SectionContainer>
      <SectionContent>
        <SectionItems>
          <SectionH1>Metabnb NFTs</SectionH1>
          <SectionP>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</SectionP>
          <SectionBtn>Learn More</SectionBtn>
        </SectionItems>
        <SectionItems>
          <SectionImg src={MainImg} alt="main" />
        </SectionItems>
      </SectionContent>
    </SectionContainer>
  );
}

export default Section


const SectionContainer = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
  border: 1px solid #000000;
  overflow: hidden;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  height: 100%;
  padding: 0px 5rem;
  color: #fff;

  @media screen and (max-width: 820px) {
    padding: 0px 2rem;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    padding: 0px 2rem;
  }
`;

const SectionItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  margin-bottom: 50px;
  @media screen and (max-width: 550px) {
    width: 100%;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
  }
`;

const SectionH1 = styled.h1`
  font-size: 2.5rem;
  margin-top: 100px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  text-align: left;
  /* margin-bottom: -100px; */
`;

const SectionP = styled.p`
  font-size: 1rem;
  width: 50%;
`;

const SectionBtn = styled.button`
  font-size: 1rem;
  padding: 10px 22px;
  border: none;
  background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
  color: #a02279;
  cursor: pointer;
  /* margin-top: -100px; */
  margin-top: 25px;
`;

const SectionImg = styled.img`
  margin-top: 50px;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 820px) {
    width: 70%;
    height: 70%;
  }
`;