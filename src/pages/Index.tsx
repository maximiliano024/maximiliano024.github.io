import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { WhoWeAreSection } from "@/components/WhoWeAreSection";
import { CommitmentSection } from "@/components/CommitmentSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Header />
      <Hero />
      <AboutSection />
      <WhoWeAreSection />
      <CommitmentSection />
      <ProductsSection activeCategory="Todos" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
