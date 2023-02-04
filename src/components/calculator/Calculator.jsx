import React, { useContext, useReducer, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../../store/Subject";
import { BiMinus } from "react-icons/bi";
import Button from "../UI/Button";
import Input from "../UI/Input";

const number = null;

const ACTION_TYPES = {
  PLUS: "plus",
  MINUS: "minus",
  MULTIPLY: "multiply",
  DIVIDE: "divide",
  CLEAR: "clear",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.PLUS:
      return state + action.payload;
    case ACTION_TYPES.MINUS:
      return state - action.payload;
    case ACTION_TYPES.MULTIPLY:
      return state * action.payload;
    case ACTION_TYPES.DIVIDE:
      return state / action.payload;
    case ACTION_TYPES.CLEAR:
      return state === "";
    default:
      throw console.log("error");
  }
}

function Calculator() {
  const { state } = useContext(GlobalStyle);

  const [result, dispatch] = useReducer(reducer, +number);

  const [value, setValue] = useState("");

  const inputValueHandler = (event) => {
    setValue(+event.target.value);
  };

  const plusHandler = (event) => {
    event.preventDefault();
    dispatch({ type: ACTION_TYPES.PLUS, payload: value });
  };

  const minusHandler = (event) => {
    event.preventDefault();
    dispatch({ type: ACTION_TYPES.MINUS, payload: value });
  };

  const multiplyHandler = (event) => {
    event.preventDefault();
    dispatch({ type: ACTION_TYPES.MULTIPLY, payload: value });
  };

  const divideHandler = (event) => {
    event.preventDefault();
    dispatch({ type: ACTION_TYPES.DIVIDE, payload: value });
  };

  const clear = (event) => {
    event.preventDefault();
    setValue("");
    dispatch({ type: ACTION_TYPES.CLEAR });
  };

  return (
    <Contiener>
      <Form className={state === true ? "formSun" : "formMoon"}>
        <Result>{result}</Result>
        <div>
          <Input value={value} onChange={inputValueHandler} />
        </div>

        <ButtonConteiner>
          <Button onClick={plusHandler}>+</Button>
          <Button onClick={minusHandler}>
            <Minus />
          </Button>
          <Button onClick={multiplyHandler}>x</Button>
          <Button onClick={divideHandler}>/</Button>
          <Clear onClick={clear}>C</Clear>
        </ButtonConteiner>
      </Form>
    </Contiener>
  );
}

export default Calculator;

const Contiener = styled.div`
  margin-top: 100px;

  .formSun {
    background-color: #006aff;
  }

  .formMoon {
    background-color: #3d3d3d;
  }
`;

const Result = styled.p`
  background-color: #f2f2f2;
  margin: 0;
  width: 320px;
  padding: 6px 16px;
  font-size: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 400px;
  gap: 10px;
  padding: 20px 20px 30px 20px;
`;

const ButtonConteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Minus = styled(BiMinus)`
  margin: 4px 0 0 0;
`;

const Clear = styled.button`
  padding: 5px 20px;
  font-size: 3rem;
  background-color: #ff8400;
  border: none;
  width: 90%;
  height: 60px;
  border-radius: 6px;
  cursor: pointer;
  :hover {
    transition: 0.2s;
    background-color: #c86700;
  }

  :active {
    background-color: #393939;
  }
`;
