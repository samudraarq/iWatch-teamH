import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <UserContext.Provider
      value={{
        isLogin,
        userToken,
        username,
        userEmail,
        setIsLogin,
        setUserToken,
        setUsername,
        setUserEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
