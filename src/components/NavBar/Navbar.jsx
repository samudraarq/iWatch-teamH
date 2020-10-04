import React, { useState } from 'react'
import SignUp from './SignUp/SignUp';
import styles from "./Navbar.module.css"
import LogoMilan from '../LogoMilan/LogoMilan';

const Navbar = () => {        
    return (        
        <React.Fragment>
            <div className={styles.container}>
                <LogoMilan />
                <input type="text" value="Search"></input>                     
                {/* <SignUp />             */}
                <SignUp />
            </div>
        </React.Fragment>
    )
}
export default Navbar