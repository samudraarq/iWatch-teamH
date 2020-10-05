import React from 'react'
import LogoMilan from '../LogoMilan/LogoMilan'
import styles from './Modal.module.css'

const ModalMilan = () => {
    return (
        <div className={styles.modalContainer}>
            <LogoMilan />
            <div className={styles.join}>
                <p>Full Name</p>
                <input name="FullName"></input>
            </div>
            <div className={styles.join}>
                <p>Email</p>
                <input name="Email"></input>
            </div>
            <div className={styles.join}>
                <p>Password</p>
                <input name="Password"></input>
            </div>            
            <div className={styles.modalButton}>
                <button className="btn btn-danger">Sign Up</button>
            </div>
            <p>
                Already Sign Up?  
                <span><a>Login</a></span>
            </p>
        </div>
    )
}
export default ModalMilan