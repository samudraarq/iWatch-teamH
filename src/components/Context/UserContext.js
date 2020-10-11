import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userFullname, setUserFullname] = useState("");
  const [userImg, setUserImg] = useState("");

  return (
    <UserContext.Provider
      value={{
        isLogin,
        userToken,
        userId,
        username,
        userEmail,
        userFullname,
        userImg,
        setIsLogin,
        setUserToken,
        setUserId,
        setUsername,
        setUserEmail,
        setUserFullname,
        setUserImg,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
