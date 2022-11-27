import { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  token: "",
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
    const [token,setToken] = useState(false);
    const userIsLoggedIn = !!token;

    const loginhandler = (token) => {
        setToken(true);
    };

    const logouthandler = () => {
        setToken(null);
    };

    const contextValue = {
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginhandler,
        logout:logouthandler
    }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};


export default AuthContext;