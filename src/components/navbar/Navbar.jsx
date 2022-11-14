import React from "react";
import { useMediaQuery } from "react-responsive";
import { Logo } from "../logo/Logo";
import { NavBtn } from "../navbtn/NavBtn";
import { DeviceSize } from "../responsive/index";
import { MobileNavLinks } from "./mobileNavlinks";

import {
  NavBarContainer,
  LeftSection,
  MidSection,
  RightSection,
} from "./navbar.styles";
import { NavLinks } from "./NavLinks";

const Navbar = (props) => {
const isMobile = useMediaQuery({maxWidth: DeviceSize.mobile});

  return (
    <NavBarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MidSection>
        
        {!isMobile && <NavLinks />}
      </MidSection>
      <RightSection>
        {!isMobile && <NavBtn />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavBarContainer>
  );
};

export default Navbar;
