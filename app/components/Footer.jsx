'use client'
import React from "react"
import styles from './footer.module.scss'
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    return (
        <section className={styles.footerSection}>
            <div className={styles.footerLegales}>
                <Link href="/legales/cgv" className={styles.footerLegales}>Politique&nbsp;de&nbsp;protection&nbsp;des&nbsp;donnees&nbsp;personelles</Link>
                <b>-</b>
                <Link href="/legales/mentions-legales" className={styles.footerLegales}>cookies</Link>
                <b>-</b>
                <Link href="/legales/mentions-legales" className={styles.footerLegales}>Mentions&nbsp;legales</Link>
                <b>-</b>
                <Link href="/legales/mentions-legales" className={styles.footerLegales}>Gérér&nbsp;mes&nbsp;cookies</Link>        
            </div>
            <div className="flex flex-row justify-center items-center">
                <Link href="#"><Image src="/assets/img/Behance.png" alt='behance' width={25} height={25}/></Link>
                <Link href="#"><Image src="/assets/img/Instagram.png" alt='Instagram' width={25} height={25}/></Link>
                <Link href="#"><Image src="/assets/img/Mailto.png" alt='mailto' width={25} height={25}/></Link>
                <Link href="#"><Image src="/assets/img/Whatsapp.png" alt='Whatsapp' width={25} height={25}/></Link>
            </div>
            <div className={styles.footerUtiles}>
                <p className='flex flex-row justify-center items-center font-semibold'>Powered by <a href="https://vkucode.com"><Image src="/assets/img/partners/logoVku.png" width={50} height={50} alt='VKU CODE' /></a></p>
            </div>
        </section>
    )
}

export default Footer;