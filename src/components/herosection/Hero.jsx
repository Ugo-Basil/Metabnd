import styled from "styled-components";
import heroImage from "../../assets/metaHero.png";
import React from "react";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>
            Rent a <span className="spanText">Place</span> away from
            <span className="spanText"> Home</span> in the
            <span className="spanText"> Metaverse</span>
          </HeroH1>
          <HeroP>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </HeroP>
          <SearchBar>
            <InputText />
            <HeroBtn to="/">Search</HeroBtn>
          </SearchBar>
        </HeroItems>
        <HeroImg>
          <img src={heroImage} alt="hero" />
        </HeroImg>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  margin-top: 10px;

`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0px 5rem;
  color: #fff;

  /* gap: 150px; */

  @media screen and (max-width: 820px) {
    padding: 0px 2rem;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    padding: 0px 2rem;
  }
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* height: 100vh; */
  /* max-height: 100%; */
  padding: 0;
  color: #000;
  line-height: 1.1;
  font-weight: bold;
  width: 50%;
   
  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;

const HeroH1 = styled.h1`
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  font-size: 56px;
  font-weight: 400;
  letter-spacing: -0.02em;
  padding: 0;
  font-weight: bold;
  color: #000;
  text-align: justify;
  width: 100%;
  .spanText {
    color: #a02279;
  }

  @media screen and (max-width: 820px) {
    font-size: 20px;
    margin-top: 2rem;
  }
`;

const HeroP = styled.p`
 
  margin-bottom: 2rem;
  text-align: left;
  color: #000;
  font-family: "Red Rose";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  padding: 0;

  @media screen and (max-width: 820px) {
    font-size: 18px;
  }
`;
const SearchBar = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: #000;
  font-weight: bold;
  width: 100%;
`;

const InputText = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #000;
  padding: 0 1rem;
  /* margin-left: -28rem; */
  /* margin-bottom: 1rem; */
  font-size: 1rem;
  outline: none;
  color: #000;
  font-family: "Red Rose";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;

const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #a02279;
  color: #fff;
  transition: 0.2s ease-out;
  
  /* margin-left: 1rem; */
  font-family: "Red Rose";
  font-style: normal;
  height: 50px;

  @media screen and (max-width: 550px) {
    font-size: 1rem;
    padding: 1rem 2rem;
  }
`;

const HeroImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 25px;
  
  /* height: 100vh; */
  /* max-height: 100%; */
  /* margin-top: 50px; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-left: -50px;
    
    }

  @media screen and (max-width: 820px) {
    width: 100%;
    height: 100%;
    margin-top: 15px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      padding-left: 50px;
    }
  }

  @media screen and (max-width: 550px) {
    img{
      padding-left: 0;
    }
  }
`;

//Mobile View
