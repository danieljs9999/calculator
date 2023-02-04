import React from "react";
import styled from "styled-components";

function Input({ onChange, value }) {
  return <InputStyled value={value} type="number" onChange={onChange} />;
}

export default Input;

const InputStyled = styled.input`
  margin: 20px 0;
  padding: 10px;
  outline: none;
  font-size: 2rem;
  border: none;
  background-color: #ffffff;

  /* text-align: right; */
  :focus {
    border: none;
    background-color: #ededed;
  }
`;
