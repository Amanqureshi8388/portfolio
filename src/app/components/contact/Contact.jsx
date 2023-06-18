import Link from 'next/link'
import style from './contact.module.scss'
import Form from './Form'
import Subtitle from '../helper/sectionSubtitle/Subtitle'
import {ImLocation} from 'react-icons/im'
import {IoIosMailOpen} from 'react-icons/io'
import {BsFillTelephoneFill} from 'react-icons/bs'





const Contact = () => {
  return (
    <>
    <section className={`${style.contact}`} id="contact">
        <div className="container sm:grid grid-cols-2 gap-4 sm:gap-10 lg:gap-32">
           <div className={`${style.contact__left} `}>
            <Subtitle subTitle = {'Contact me'}/>
            <p className='content-writing'>I'm actively seeking <span className='text-[#01d293]'>new opportunities</span> and welcome any inquiries. Feel free to reach out to me with questions or simply to say hello, and I'll make every effort to respond promptly. My inbox is open and I'm eager to connect with you!</p>
           <address>
            <div> <ImLocation className={`${style.icons}`}/> <span>Delhi-India</span>
            </div> 
            <div><IoIosMailOpen className={`${style.icons}`}/>
                <span>amanqureshi8388@gmail.com</span>
            </div> 
            <div><BsFillTelephoneFill className={`${style.icons}`}/>
                <span>7303063031</span>
            </div> 
           </address>
           </div>


               {/* form  */}

           <div>
            <Form/>
           </div>
        </div>
    </section>
    </>
  )
}

export default Contact