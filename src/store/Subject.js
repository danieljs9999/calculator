import { createContext, useState } from "react";

export const GlobalStyle = createContext();

export const StateSubject = (props) => {
  const [state, setState] = useState(false);

  const sunHandler = () => {
    setState(true);
  };
  const moonHandler = () => {
    setState(false);
  };

  const stateSubject = {
    state,
    sunHandler,
    moonHandler,
  };

  return (
    <GlobalStyle.Provider value={stateSubject}>
      {props.children}
    </GlobalStyle.Provider>
  );
};
