import React from 'react'
import { LinkItem, LinksWrapper, NavLinksContainer, Link } from '../navbar/navlinks.styles'

export const NavLinks = () => {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="/">Home</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/placetostay">Place to stay</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/nfts">NFTs</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/community">Community</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}


