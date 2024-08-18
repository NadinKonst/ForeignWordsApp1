import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import wordStore from "../stores/WordStore";

const Provider = observer(({ children }) => {
  useEffect(() => {
    wordStore.fetchWords();
  }, []);

  return (
    <WordContext.Provider value={wordStore}>{children}</WordContext.Provider>
  );
});

export const WordContext = React.createContext();
export default Provider;
