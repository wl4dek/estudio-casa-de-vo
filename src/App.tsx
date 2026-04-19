import {
  Navbar,
  Hero,
  PortfolioSection,
  AboutSection,
  TestimonialInstagram,
  ContactSection,
  Footer
} from "./components";

export default function App() {
  return (
    <div className="bg-brand-light min-h-screen selection:bg-brand-terracotta selection:text-white">
      <Navbar />
      <Hero />
      <PortfolioSection />
      <AboutSection />
      <TestimonialInstagram />
      <ContactSection />
      <Footer />
    </div>
  );
}
