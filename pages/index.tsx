import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import DiscoverSection from '../components/DiscoverSection'
import ProductSection from '../components/ProductSection'
import Testimonial_1 from '../components/Testimonial_1'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <DiscoverSection />
      <ProductSection />
      <Testimonial_1 />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
