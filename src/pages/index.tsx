import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import CampaignDashboard from "../components/CampaignDashboard";
import WhyKreatorKart from "../components/WhyKreatorKart";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <CampaignDashboard />
      <WhyKreatorKart />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
