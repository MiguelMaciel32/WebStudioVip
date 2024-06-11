"use client";

import { createContext, useContext, useState } from "react";

// create a context that can be used to manipulate the state of the login button on the header

interface IUtils {
  isLogged: boolean;
  toggleSignIn: () => void;
}

export const UtilsContext = createContext<IUtils>({
  isLogged: false,
  toggleSignIn: () => {},
});

export const UtilsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLoggedIn] = useState(false);

  const toggleSignIn = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <UtilsContext.Provider value={{ isLogged, toggleSignIn }}>
      {children}
    </UtilsContext.Provider>
  );
};

export const useUtilsContext = () => {
  const context = useContext(UtilsContext);
  return context;
};
