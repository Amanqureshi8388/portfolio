import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from './Portfolio.module.scss'
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";








const PortfolioItem = (props) => {
    const { title, img, liveUrl, keyword, description , gitCode } = props.item;
    return (
      <>
        <div className={`${style.portfolio__img} hidden md:block`}>
          <Image alt="c" src={img} width="380" height="250" priority />
        </div>
        <section className={`${style.portfolio__item} mt-8 md:mt-0 `}>
          <h6 className=" md:text-end">Featured Projects</h6>
          <Link href={liveUrl} target="_blank">
          <h3 className={`${style.portfolio__title} md:text-end`}>{title}</h3>
          </Link>
          <p className={`${style.portfolio__description} content-writing`}>
            {description}
          </p>
          <div
            className={`${style.portfolio__live}  flex gap-4 items-center justify-end `}
          >
              <Link href={gitCode} target="_blank" className=" flex items-center justify-center gap-3 ">
            <abbr title="Github">
                <AiFillGithub className={`${style.project_icon}`} />
            </abbr>
                <p className="content-writing list-none">Code</p>
              </Link>
  
              <Link href={liveUrl} target="_blank" className=" flex items-center justify-center gap-3 " >
                 <abbr title="External Link">
                <HiOutlineExternalLink className={`${style.project_icon}`} />
            </abbr>
                <p className=" content-writing">Live Demo</p>
              </Link>
          </div>
        </section>
      </>
    );
  };
  
  export default PortfolioItem;