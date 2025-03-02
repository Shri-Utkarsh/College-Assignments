import "./App.css";
import { useContext } from "react";

import LearnReduce from "./components/LearnReduce";
import { ThemeContext } from "./components/ThemeContext";

function App() {
  const { darkMode, dispatch } = useContext(ThemeContext);
  return <>
  
  <LearnReduce/>

  <div className={`h-screen flex items-center justify-center ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <button
        className="px-4 py-2 rounded bg-blue-500 text-white"
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      >
        Toggle Theme
      </button>
    </div>
  </>;
}

export default App;
