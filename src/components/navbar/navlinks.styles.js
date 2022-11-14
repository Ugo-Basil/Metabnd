import styled from "styled-components";

const NavLinksContainer = styled.div`
height: 100%;
display: flex;
align-items: center;

`;

const LinksWrapper = styled.ul`
margin-left: 1px;
padding: 0;
display: flex;
height: 100%;
`;

const LinkItem = styled.li`
  list-style: none;
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    /* background-color: #f5f5f5; */
    border-bottom: 1px solid #a02279;
    cursor: pointer;
  }
`;

const Link = styled.a`
text-decoration: none;
font-size: inherit;
color: inherit;
display: flex;
align-items: center;
justify-content: center;
`;

export { NavLinksContainer, LinksWrapper, LinkItem, Link };