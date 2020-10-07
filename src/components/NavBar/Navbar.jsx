import React, { useState, useEffect } from "react";
import SignUpToModal from "./SignUp/SignUptoModal";
import styles from "./Navbar.module.css";
import LogoMilan from "../LogoMilan/LogoMilan";
import DropDownMenu from './DropDownMenu'
import Search from './Search/Search'


const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [image, setImage] = useState("")  

  useEffect(() => {
    console.log(localStorage.getItem('token'))       
    if(localStorage.getItem('token')){
      setIsLogin(true)      
      setImage("https://cdn-2.tstatic.net/tribunnews/foto/bank/images/tes-kepribadian-gambar-pertama-11.jpg")
    }else{
      setIsLogin(false)
    }
  }, [])

  const handleLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setIsLogin(false)
  }

  return (
    <React.Fragment>
      <div className={styles.container}>
        <LogoMilan />
        {/* <SignUp />             */}
        <Search />
        {isLogin==false ? <SignUpToModal setIsLogin={setIsLogin}/> : <DropDownMenu handleLogOut={handleLogOut} image={image}/>}
      </div>
    </React.Fragment>
  );
};
export default Navbar;
