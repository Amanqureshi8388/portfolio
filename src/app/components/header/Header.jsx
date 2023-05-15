"use client"

import React, { useEffect, useRef, useContext } from 'react';
import style from './header.module.scss'
import Link from 'next/link'
import {FaAtlassian} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseSquare} from 'react-icons/ai'


const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
 
  const headerFunc = () =>{
   if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
     headerRef.current.classList.add(`${style.header__shrink}`)
 
   }else{
     headerRef.current.classList.remove(`${style.header__shrink}`)
   }
  }
 
  useEffect(()=>{
   window.addEventListener('scroll',headerFunc)
   return()=>window.removeEventListener('scroll',headerFunc)
  },[])
   
  const toggleMenu = () => menuRef.current.classList.toggle(`${style.menu__active}`)


  return (
    <>
    <header className={`${style.header} py-5 md:py-8`} ref={headerRef}>
      <div className="container flex items-center justify-between">
      <div className={`${style.logo} `}><FaAtlassian/></div>
        {/* <NavBar/> */}
      <nav className={`${style.navBar}`} ref={menuRef} >
        <div className={`${style.navMenu}`}>
          <span className={`${style.closeMenu}`} onClick={toggleMenu}><AiFillCloseSquare/></span>
          <a href={'/#'}>Home</a>
          <a href={'/#about'} scroll={false}>About</a>
          <a href={'/#services'} scroll={false}>Services</a>  
          <a href={'/#portfolio'} scroll={false}>Portfolio</a>
          <a href={'/#contact'} scroll={false}>Contact</a>
        </div>
      </nav>

      <span className={`${style.mobile__menu}`} onClick={toggleMenu}><GiHamburgerMenu/></span>
      </div>
    </header>
    </>
  )
}

export default Header