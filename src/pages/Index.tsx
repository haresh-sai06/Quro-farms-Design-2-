
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import ProductPreview from "../components/ProductPreview";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <ProductPreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
