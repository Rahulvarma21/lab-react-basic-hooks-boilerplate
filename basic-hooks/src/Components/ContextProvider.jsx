import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [state, setState] = useState(false);

  const style = {
    backgroundColor: state == true ? "black" : "grey",
    color: state == true ? "white" : "black",
    padding: "10px",
    textAlign: "center",
  };

  return (
    <AppContext.Provider
      value={{ state: state, ContextStyle: style, setterFn: setState }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
