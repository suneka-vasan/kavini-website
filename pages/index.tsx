import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import DiscoverSection from '../components/DiscoverSection'
import ProductSection from '../components/ProductSection'
import TestimonialSec from '../components/TestimonialSec'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <DiscoverSection />
      <ProductSection />
      <TestimonialSec />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
