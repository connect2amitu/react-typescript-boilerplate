import { useReducer } from 'react';

interface Global {
  isDarkTheme: string;
}

const initialArgs: Global = {
  isDarkTheme: localStorage.getItem('theme') || "light",
};

function reducer(state: Global, action: Global) {
  return { ...state, ...action };
}

const useGlobal = () => {
  const [state, setState] = useReducer(reducer, initialArgs);

  const toggleTheme = () => {
    localStorage.setItem('theme', state.isDarkTheme === "dark" ? "light" : "dark");

    setState({ isDarkTheme: state.isDarkTheme === "dark" ? "light" : "dark" });
  };

  return {
    toggleTheme,
    ...state,
  };
};

export default useGlobal;
