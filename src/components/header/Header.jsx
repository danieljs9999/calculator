import React, { useContext } from "react";
import styled from "styled-components";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { GlobalStyle } from "../../store/Subject";

function Header() {
  const { state, sunHandler, moonHandler } = useContext(GlobalStyle);

  return (
    <StyledHeader>
      <StyledNav className={state === true ? "navSun" : "navMoon"}>
        <Logo className={state === true ? "logoSun" : "logoMoon"}>
          Calculator
        </Logo>
        <Subject>
          {state === true ? (
            <Moon onClick={moonHandler} />
          ) : (
            <Sun onClick={sunHandler} />
          )}
        </Subject>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  .navSun {
    background-color: #bb00ff;
  }

  .navMoon {
    background-color: #333333;
  }

  .logoSun {
    color: #000000;
  }

  .logoMoon {
    color: white;
  }
`;

const StyledNav = styled.nav`
  width: 100%;
  padding: 10px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const Logo = styled.p`
  margin: 0;
  font-size: 3rem;
  font-weight: 600;
  color: white;
`;

const Subject = styled.p`
  margin: 0 20px 0 0;
`;

const Sun = styled(RiSunFill)`
  font-size: 2.6rem;
  color: white;
  /* color: #000000; */
  cursor: pointer;
`;

const Moon = styled(RiMoonFill)`
  font-size: 2.6rem;
  transform: rotate(40deg);
  cursor: pointer;
`;
