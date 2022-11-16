import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import { useState } from "react";
import { NavBtn } from "../navbtn/NavBtn";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 90;

 
`;

const LinksWrapper = styled.ul`
  margin-left: 1px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
    top: 65px;
    left: 0;
`;

const Marginer = styled.div`
    height: 1em;
`;

const LinkItem = styled.li`
  list-style: none;
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  
  border-bottom: 2px solid transparent;
  margin: 20px;
  transition: all 220ms ease-in-out;
 
`;

const Link = styled.a`
  text-decoration: none;
  font-size: inherit;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileNavLinks = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="/">Home</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/placetostay">Place to stay</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/">NFTs</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/">Community</Link>
          </LinkItem>
          <Marginer />
          <LinkItem>
            <NavBtn />
          </LinkItem>
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
};
