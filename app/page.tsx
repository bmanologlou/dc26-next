import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import HeroImage from './components/HeroImage'
import Steps from './components/Steps'
import Categories from './components/Categories'
import Dimitra from './components/Dimitra'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HeroImage />
      <Steps />
      <Stats />
      <Categories />
      <Dimitra />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CtaBanner />
      <Contact />
      <Footer />
    </main>
  )
}
