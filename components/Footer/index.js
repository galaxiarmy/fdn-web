import Image from 'next/image'
import React from 'react'
import LogoFemale from '../../public/images/FD-Logo.png'
import LogoApple from '../../public/images/btn-app-store-badge.png'
import LogoAndroid from '../../public/images/btn-google-play-badge.png'
import IconFacebook from '../../public/images/ic-round-fb.svg'
import IconIG from '../../public/images/ic-round-ig.svg'
import IconTwitter from '../../public/images/ic-round-twitter.svg'
import IconYoutube from '../../public/images/ic-round-fb.svg'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
        <div style={{width: "80%"}}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <div>
            <p className={styles.title_footer}>About Us</p>
            <p className={styles.title_footer}>Feedback</p>
            <p className={styles.title_footer}>Contact</p>
        </div>
        <div>
            <p className={styles.title_footer}>Term & Conditions</p>
            <p className={styles.title_footer}>Privacy Policy</p>
            <p className={styles.title_footer}>Help</p>
        </div>
        <div>
            <p className={styles.title_footer}>Awards</p>
            <p className={styles.title_footer}>Newsletter</p>
        </div>
        <div>
            <p className={styles.title_footer}>Download Our Mobile App</p>
            <div>
                <Image width={130} height={50} src={LogoApple} alt="apple"/>
                <Image style={{marginLeft: 12}} width={130} height={50} src={LogoAndroid} alt="android"/>
            </div>
            <div>
                <Image style={{margin: 10}} width={32} height={32} src={IconFacebook} alt="android"/>
                <Image  style={{margin: 10}}  width={32} height={32} src={IconTwitter} alt="android"/>
                <Image  style={{margin: 10}}  width={32} height={32} src={IconIG} alt="android"/>
                <Image  style={{margin: 10}}  width={32} height={32} src={IconYoutube} alt="android"/>

            </div>
        </div>
        </div>

        <div>
        <Image width={150} height={40} src={LogoFemale} alt="female"/>
            <p style={{color: "grey"}}>Copyright 2015-2017 Female Daily Network . All right reserved</p>
        </div>

        <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{display: "flex", height: 50, width: 970, backgroundColor: "#DCDCDC", justifyContent: "center", alignItems: "center"}}>
            <p style={{color: "grey", fontSize: 24}}>Bottom Frame 970x50, 468x60, 320x50</p>
        </div>
        </div>
        </div>
       
        
        </div>
  )
}

export default Footer