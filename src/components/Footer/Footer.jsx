import React from 'react'
import LogoMilan from '../LogoMilan/LogoMilan';
import styles from './Footer.module.css'
import img from './fbIcon.png'


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>            
                <div className={styles.logoAndDesc}>
                    <LogoMilan/>            
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>                
                </div>
                <div className={styles.navFooter}>
                    <ul>
                        <li>Tentang Kami</li>
                        <li>Blog</li>
                        <li>Layanan</li>
                        <li>Karir</li>
                        <li>Pusat Media</li>
                    </ul>
                </div>
                <div className={styles.socialMedia}>
                    <h3>Download</h3>
                    <div className={styles.downloadOption}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJazvEi9Qg9_JvD95YCmkyHz2DvBuArRFFgA&usqp=CAU" alt=""></img>  
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJazvEi9Qg9_JvD95YCmkyHz2DvBuArRFFgA&usqp=CAU" alt=""></img>  
                    </div>
                    <h3>Social Media</h3>
                    <div className={styles.downloadSocmed}>
                        <img src={img}></img>
                        <img src={img}></img>
                        <img src={img}></img>                        
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                Copyright © 2000-202 MilanTV.  All Rights Reserved
            </div>            
        </div>
    )
}
export default Footer;