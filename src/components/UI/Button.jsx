import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../../store/Subject";

function Button({ children, onClick }) {
  const { state } = useContext(GlobalStyle);

  return (
    <ButtonConteiner>
      <ButtonStyled
        className={state === true ? "buttonSun" : "buttonMoon"}
        onClick={onClick}
      >
        {children}
      </ButtonStyled>
    </ButtonConteiner>
  );
}

export default Button;

const ButtonConteiner = styled.div`
  .buttonSun {
    background-color: #ffa600;

    :hover {
      transition: 0.2s;
      background-color: #ca8300;
    }

    :active {
      background-color: #9e6600;
    }
  }

  .buttonMoon {
    background-color: #8d8d8d;

    :hover {
      transition: 0.2s;
      background-color: #656565;
    }

    :active {
      background-color: #393939;
    }
  }
`;

const ButtonStyled = styled.button`
  padding: 10px 20px;
  font-size: 4rem;
  border: none;
  width: 140px;
  height: 80px;
  cursor: pointer;
`;
