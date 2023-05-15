import React from 'react'
import style from './sevices.module.scss'
import Image from 'next/image'
import icon1 from '../assets/images/web.svg'
import icon2 from '../assets/images/website-sketching.svg'
import icon3 from '../assets/images/link.svg'
import {CgDesktop} from 'react-icons/cg'
import Subtitle from '../helper/sectionSubtitle/Subtitle'



const Services = () => {
    return (
      <>
      <section className={`${style.section__services}`} id='services'>
          <div className="container">
             <section>
              <Subtitle subTitle={'services'}/>
              <p className={`${style.services__heading} content-writing md:w-[70%] lgw-[50%] my-[2rem]`}>As a Frontend develope, My goal is to <span>visual appealing</span> and <span>user friendly </span> interfaces that meet the needs of the client and their users</p>
             </section>
             <section className={`${style.services} grid sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
              <div className={`${style.wrapper} p-6`}>
                  <div className=''>
                  <Image alt='s'src={icon1} className=' w-[10rem]'priority />
                  </div>
                  <div>
                      <p className=' text-[1.6rem] md:text-[2rem] my-6 text-[#CCD6F6]'>Webapp developer </p>
                      <p className='content-writing'>Complex, innovative, responsive and user-centric web application solutions wit close attention to detail that result in the increase in conversions and sales </p>
                  </div>
              </div>
              <div className={`${style.wrapper} p-6`}>
                  <div className=''>
                  <Image alt='s'src={icon2} className=' text-red-400 w-[10rem]' priority/>
                  </div>
                  <div>
                      <p className='text-[1.6rem] md:text-[2rem] my-6 text-[#CCD6F6]'>Responsive Design</p>
                      <p className='content-writing'>I make websites and apps that are mobile-savvy. Ensuring that its look and functions correctly on different devices and screen sizes. </p>
                  </div>
              </div>
              <div className={`${style.wrapper} p-6`}>
                  <div className=''>
                  <Image alt='s'src={icon3} className='w-[10rem]'  priority/>
                  </div>
                  <div>
                      <p className='text-[1.6rem] md:text-[2rem] my-6 text-[#CCD6F6]'>API Integration</p>
                      <p className='content-writing'>API Integration can be a complex process. I have a good understanding of HTTPS, JSON and API designs principles to be able to effectively Integrate with APIs</p>
                  </div>
              </div>
             </section>
          </div>
      </section>
      </>
    )
  }
  
  export default Services