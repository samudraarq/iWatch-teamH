import React, { useContext } from "react";
import { Avatar } from "@material-ui/core";
import { UserContext } from "../Context/UserContext";

const FotoProfil = () => {
  const { username, userImg } = useContext(UserContext);

  return (
    <Avatar alt="User Profile Picture" src={userImg ? userImg : ""}>
      {username[0]}
    </Avatar>
  );
};

export default FotoProfil;
