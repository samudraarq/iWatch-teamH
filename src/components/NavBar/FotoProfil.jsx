import React, { useContext } from "react";
import { Avatar } from "@material-ui/core";
import { UserContext } from "../Context/UserContext";

const FotoProfil = () => {
  const { username } = useContext(UserContext);

  return <Avatar alt="User Profile Picture">{username[0]}</Avatar>;
};

export default FotoProfil;
