import React from "react";
import styled from "styled-components";
import frameOne from "../../assets/frame1.png";
import frameTwo from "../../assets/frame3.png";
import frameThree from "../../assets/frame3.png";

const HeroFooter = () => {
  return (
    <HeroFooterContainer>
      <HeroFooterContent>
        <HeroFooterImg>
          <img src={frameOne} alt="" />
        </HeroFooterImg>
        <HeroFooterImg>
          <img src={frameTwo} alt="" />
        </HeroFooterImg>
        <HeroFooterImg>
          <img src={frameThree} alt="" />
        </HeroFooterImg>
      </HeroFooterContent>
    </HeroFooterContainer>
  );
};

export default HeroFooter;

const HeroFooterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 70px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
`;

const HeroFooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img {
    width: 100%;
    height: 100%;
  }
`;

const HeroFooterImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 100px;
`;
