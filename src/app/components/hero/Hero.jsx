import React from 'react'
import Link from "next/link";
import Image from "next/image";
import style from './hero.module.scss';
import {SiTailwindcss ,SiJavascript, SiSass } from 'react-icons/si'
import {FaCss3Alt} from 'react-icons/fa'
import {RiReactjsLine} from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'
import {AiFillHtml5} from 'react-icons/ai'
import Subtitle from '../helper/sectionSubtitle/Subtitle';

const Hero = () => {
  return (
    <>
      <section className={`${style.section__hero}`} id="/">
        <div className={`container`}>
          <div className={`${style.section__left}`}>
            {/* <SectionSubtitle subTitle="Hi, My name is " /> */}
            <Subtitle subTitle="Hi, My name is "/>
            <h1 className=" text-[40px] md:text-[60px] lg:text-[10rem]">Aman Qureshi</h1>
            <h3 className={`${style.small} text-[30px] md:text-[50px] lg:text-[7rem]`}>I build things for the web.</h3>
            <p className={'content-writing lg:w-[70%]'}>I{`'`}m a Delhi-based <span className="highlight">web developer</span> with a passion for DIY, gaming, and personal projects. <span className="highlight"> React.js and Next.js are my preferred tools of choice.</span> By adhering to best practices, I craft high-performing websites that are user-friendly, lightning-fast, and optimized for success</p>
            <div className={`${style.techStack} flex items-center gap-5 md:gap-10 my-[3rem] lg:my-[5rem] text-lg md:text-2xl`}>
              <p>Tech Stack</p>
              <div className='text-white'>|</div>
              <div className={`${style.icons} flex items-center gap-7 text-3xl md:text-4xl`}>
              <AiFillHtml5 className={`${style.logo}`} />
              <FaCss3Alt className={`${style.logo}`}/>
              <SiJavascript className={`${style.logo}`}/>
              <RiReactjsLine className={`${style.logo}`}/>
              <TbBrandNextjs className=' text-white' />
              <SiTailwindcss className={`${style.logo}`}/>
              <SiSass className={`${style.logo}`}/>
              </div>
            </div>

            <div className={`${style.section__btn}`}>
              <Link href={`/PDF/Aman_Qureshi_Resume.pdf`}  target="_blank" alt='alt text'>Download Resume</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero