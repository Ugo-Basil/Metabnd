import styled from "styled-components"; 

const BtnContainer = styled.div`
    display: flex;

`;

const Btn = styled.button`
  border: 0;
  outline: 0;
  padding: 10px;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
  border-radius: 10px;
    transition: all 220ms ease-in-out;
    &:hover {
        cursor: pointer;
        background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
    }
`;

export { BtnContainer, Btn };