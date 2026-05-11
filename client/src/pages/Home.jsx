import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import StatsRibbon from '../components/Hero/StatsRibbon';
import Services from '../components/Services/Services';
import OurProcess from '../components/OurProcess/OurProcess';
import PackagesPreview from '../components/Packages/PackagesPreview';
import AwardsSection from '../components/AwardsSection/AwardsSection';
import Portfolio from '../components/Portfolio/Portfolio';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import TeamSection from '../components/TeamSection/TeamSection';
import Testimonials from '../components/Testimonials/Testimonials';
import FaqSection from '../components/FaqSection/FaqSection';
import SocialGrid from '../components/SocialGrid/SocialGrid';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsRibbon />
        <Services />
        <OurProcess />
        <PackagesPreview />
        <AwardsSection />
        <Portfolio />
        <WhyChooseUs />
        <TeamSection />
        <Testimonials />
        <FaqSection />
        <SocialGrid />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

