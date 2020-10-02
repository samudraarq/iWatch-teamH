import React, { useState } from 'react'
import styles from './LogoMilan.module.css'
import icon from './youtube.png'

const LogoMilan = () => {    
    return (
        <React.Fragment>
            <div className={styles.logoContainer}>
                <img src={icon} alt=""></img>                
                <h3>Milan TV</h3>
            </div>
        </React.Fragment>    
    )
}
export default LogoMilan;