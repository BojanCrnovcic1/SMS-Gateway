import AboutAs from '../../components/landing/aboutAs/AboutAs';
import Footer from '../../components/landing/footer/Footer';
import Header from '../../components/landing/header/Header';
import NavBar from '../../components/landing/navBar/NavBar';
import Pricing from '../../components/landing/pricing/Pricing';
import './landingPage.scss';

const LandingPage = () => {
  return (
    <div>
        <NavBar />
        <Header />
        <Pricing />
        <AboutAs />
        <Footer />
    </div>
  )
}

export default LandingPage;