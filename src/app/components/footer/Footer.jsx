import React from 'react'
import style from './footer.module.scss'
import Link from 'next/link'
import {AiOutlineTwitter ,AiFillGithub } from 'react-icons/ai'
import {RiInstagramFill} from 'react-icons/ri'
import {SiLinkedin} from 'react-icons/si'
import {FaLinkedinIn} from 'react-icons/fa'



const Footer = () => {

  return (
    <>  

    <footer className={`${style.footer} max-sm:mt-6`}>
     <div  className='container'>
     <section className={`${style.footer__flex}  sm:flex  max-sm:text-center `}>
     <div className={`${style.Link} flex gap-5  max-md:justify-center max-sm:mb-3`}>
            <Link href='https://twitter.com/AmanQureshi8388'target='_black'><AiOutlineTwitter className={`${style.icons}`}/></Link>
            <Link href='https://www.instagram.com/amanqureshi8833'target='_black'><RiInstagramFill className={`${style.icons}`}/></Link>
            <Link href='https://www.linkedin.com/in/aman-qureshi-920457202'target='_black'><FaLinkedinIn className={`${style.icons}`}/></Link>
            <Link href='https://github.com/Amanqureshi8388'target='_black'><AiFillGithub className={`${style.icons}`}/></Link>
           </div>
     <div className={`${style.myName} text-center `}>
      <p className={`sm:text-center items-center`}>Designed & Built by Aman Qureshi</p>
     </div>
     </section>
     <p className={`${style.footer__copyright}`}> Copyright 2022 - Developed by Aman. All right reserved </p>
     </div>
     </footer>
    </>
  )
}

export default Footer