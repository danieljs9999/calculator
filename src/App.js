import { useContext } from "react";
import styled from "styled-components";
import Calculator from "./components/calculator/Calculator";
import Header from "./components/header/Header";
import { GlobalStyle } from "./store/Subject";

function App() {
  const { state } = useContext(GlobalStyle);

  return (
    <Conteiner>
      <Header />
      <main className={state === true ? "mainSun" : "mainMoon"}>
        <Calculator />
      </main>
    </Conteiner>
  );
}

export default App;

const Conteiner = styled.div`
  .mainSun {
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mainMoon {
    width: 100%;
    height: 100vh;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
