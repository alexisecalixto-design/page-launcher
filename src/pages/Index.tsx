import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Properties from "@/components/Properties";
import SellBanner from "@/components/SellBanner";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Properties />
      <SellBanner />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
