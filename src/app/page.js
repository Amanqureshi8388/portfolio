import Image from 'next/image'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Services from './components/Services/Services'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


export default function Home() {
  return (
    <> 
    <Header/>
    <Hero/>
    <About/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}
