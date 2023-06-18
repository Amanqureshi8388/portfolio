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
              <Subtitle subTitle={'Services'}/>
              <p className={`${style.services__heading} content-writing md:w-[70%] lgw-[50%] my-[2rem]`}>As a Frontend developer, my objective is to create <span>visual appealing</span> and <span>user friendly </span> interfaces that precisely cater to the needs of both clients and their users.</p>
             </section>
             <section className={`${style.services} grid sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
              <div className={`${style.wrapper} p-6`}>
                  <div className=''>
                  <Image alt='s'src={icon1} className=' w-[10rem]'priority />
                  </div>
                  <div>
                      <p className=' text-[1.6rem] md:text-[2rem] my-6 text-[#CCD6F6]'>Webapp developer </p>
                      <p className='content-writing'>User-centric web solutions: detail, design, results. With expertise and tech, I create apps that captivate, convert, and grow business. Quality optimized for impact.</p>
                  </div>
              </div>
              <div className={`${style.wrapper} p-6`}>
                  <div className=''>
                  <Image alt='s'src={icon2} className=' text-red-400 w-[10rem]' priority/>
                  </div>
                  <div>
                      <p className='text-[1.6rem] md:text-[2rem] my-6 text-[#CCD6F6]'>Responsive Design</p>
                      <p className='content-writing'>Mobile-savvy sites & apps: seamless adaptation, optimized UX. Responsive design, rigorous testing for impeccable performance on various devices. Engage confidently, enhance satisfaction & reach. </p>
                  </div>
              </div>
              <div className={`${style.wrapper} p-6`}>
                  <div className=''>
                  <Image alt='s'src={icon3} className='w-[10rem]'  priority/>
                  </div>
                  <div>
                      <p className='text-[1.6rem] md:text-[2rem] my-6 text-[#CCD6F6]'>API Integration</p>
                      <p className='content-writing'>API Integration expert: nuanced process, HTTPS, JSON, design principles. Seamlessly ensure communication, data exchange. Leverage knowledge for effective integration, unlocking possibilities in apps.</p>
                  </div>
              </div>
             </section>
          </div>
      </section>
      </>
    )
  }
  
  export default Services