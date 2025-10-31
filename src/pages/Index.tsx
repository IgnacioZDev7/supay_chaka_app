import Hero from "@/components/Hero";
import Synopsis from "@/components/Synopsis";
import Features from "@/components/Features";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Synopsis />
      <Features />
      <Timeline />
      <Gallery />
      <Team />
      <Footer />
    </main>
  );
};

export default Index;
