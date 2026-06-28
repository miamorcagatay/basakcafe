import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import SpecialEvents from "@/components/sections/SpecialEvents";
import Menu from "@/components/sections/Menu";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SpecialEvents />
        <Menu />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
