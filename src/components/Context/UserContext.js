import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider
      value={{
        isLogin,
        userToken,
        username,
        setIsLogin,
        setUserToken,
        setUsername,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
