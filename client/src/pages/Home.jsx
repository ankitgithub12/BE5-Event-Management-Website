import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Portfolio from '../components/Portfolio/Portfolio';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Testimonials from '../components/Testimonials/Testimonials';
import SocialGrid from '../components/SocialGrid/SocialGrid';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <SocialGrid />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
