import React from "react";
import style from "./about.module.scss";
import Link from "next/link";
import Image from "next/image";
import img01 from "../../../../public/images/myPHOTO.png";
import {AiFillCheckCircle} from 'react-icons/ai'
import Subtitle from '../helper/sectionSubtitle/Subtitle'



const About = () => {
    return (
      <>
        <section className={`${style.section__about}`} id="about">
          <div className="container">
            <div
              className={`${style.about__box} grid lg:grid  lg:grid-cols-2 gap-4 sm:gap-10 lg:gap-32 `}>
              <div className={`${style.box__left}`}>
                <Subtitle subTitle='About me'/>
                <h2>
                  I’m here <div>to help next project</div>
                </h2>
                <p className={`content-writing`}>
                  As a Front-End Web Developer. I possess an impressive arsenal if skills in HTML, CSS, javascript, React, Next, Tailwind and SCSS. I excel in designing and maintaining responsive websites that offer a smooth experience. My expertise lies in crafting dynamic. engaging interface through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web application.    
                </p>
  
                <div
                  className={`${style.checkBox}  flex justify-start items-center gap-5 lg:my-10  `}
                >
                  <div className="">
                    <h6 className="flex items-center gap-3">
                      <span>
                        <AiFillCheckCircle/>
                      </span>
                      Problem solving
                    </h6>
                    <h6 className="flex items-center gap-3">
                      <span>
                        {" "}
                        <AiFillCheckCircle/>
                      </span>
                      Search a lot
                    </h6>
                  </div>
                  <div className="">
                    <h6 className="flex items-center gap-3">
                      <span>
                        <AiFillCheckCircle/>
                      </span>
                      Creative idea
                    </h6>
                    <h6 className="flex items-center gap-3">
                      <span>
                        <AiFillCheckCircle/>
                      </span>
                      High quality
                    </h6>
                  </div>
                </div>
              </div>
              <div className={`${style.box__right} flex items-start justify-center`}>
                
                  <div
                    className={`${style.about_image} ${style.about__image_box} md:w-[80%]`}
                  >
                    <Image src={img01} alt="a" priority/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default About;