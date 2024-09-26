import React, {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCurrentUser } from "../services/getCurrentUser";

type IntialStateType = {
  isLoggedIn: boolean;
  user: any;
  isLoading: boolean;
  setIsLoggedIn: Dispatch<React.SetStateAction<boolean>>;
  setUser: Dispatch<React.SetStateAction<any>>;
};

const InitialState = {
  isLoggedIn: false,
  user: {},
  isLoading: false,
  setIsLoggedIn: () => {},
  setUser: () => {},
};

const GlobalContext = createContext<IntialStateType>(InitialState);

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        user,
        isLoading,
        setIsLoggedIn,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
