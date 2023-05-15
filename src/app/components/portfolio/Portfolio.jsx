import React from 'react'
import style from './Portfolio.module.scss'
import portfolioData from '../../Data/Portfolio'
import PortfolioItem from './PortfolioItems'
import Subtitle from '../helper/sectionSubtitle/Subtitle'

const Portfolio = () => {
  return (
    <>
    <section className={`${style.portfolio}`} id='portfolio'>
        <div className="container">
            <Subtitle subTitle = 'My portfolio'/>
            <h2>Some Things I’ve Built</h2>

            <div className={`${style.wrapper}`} >
              {portfolioData.map((item,index)=>(
                <div className={`${style.inner__wrapper} block md:grid grid-cols-2  gap-4 sm:gap-10 lg:gap-32`} key={index}>
                    <PortfolioItem item={item} />
                </div>
              ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default Portfolio