import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import InfoSection from "@/components/InfoSection";
import Promo from "@/components/Promo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <InfoSection />
      <Promo />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;