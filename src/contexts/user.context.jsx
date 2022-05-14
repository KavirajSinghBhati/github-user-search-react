import { useState, useEffect, createContext } from "react";

export const UserContext = createContext({
  userInfo: null,
  setUserInfo: () => {},
});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const value = { userInfo, setUserInfo };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

//   const response = await fetch(`https://api.github.com/users/${query}`);
