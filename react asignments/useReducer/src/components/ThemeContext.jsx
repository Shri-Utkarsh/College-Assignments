import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { darkMode: false });

  return (
    <ThemeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
