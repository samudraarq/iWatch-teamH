import React from "react";
import EditUserProfile from "../components/EditUserProfile/EditUserProfile";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/Navbar";

const EditProfile = () => {
  return (
    <div>
      <Navbar />
      <EditUserProfile />
      <Footer />
    </div>
  );
};

export default EditProfile;
