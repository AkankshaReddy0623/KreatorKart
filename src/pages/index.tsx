import { useEffect } from 'react'; // Import useEffect from react
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import WhyKreatorKart from "../components/WhyKreatorKart";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-24 18:14:13
 * Home page component with scroll handling
 */
const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we need to scroll to a section
    if (location.state?.scrollTo === 'how-it-works') {
      const section = document.getElementById('how-it-works');
      if (section) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <WhyKreatorKart />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;