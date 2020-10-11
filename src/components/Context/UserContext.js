import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <UserContext.Provider
      value={{
        isLogin,
        userToken,
        userId,
        username,
        userEmail,
        setIsLogin,
        setUserToken,
        setUserId,
        setUsername,
        setUserEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
