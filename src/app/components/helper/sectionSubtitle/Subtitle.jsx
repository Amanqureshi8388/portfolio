import React from 'react'
import style from './subtitle.module.scss'

const SectionSubtitle = ({subTitle}) => {
  return (
    <>
    <h3 className={`${style.subtitle} text-[1.4rem] `}>{subTitle}</h3>
    </>
  )
}

export default SectionSubtitle