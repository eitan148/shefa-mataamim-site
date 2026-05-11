import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PackagesGrid from "@/components/PackagesGrid";
import About from "@/components/About";
import MenuTable from "@/components/MenuTable";
import ServiceAreas from "@/components/ServiceAreas";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <Hero />
        <About />
        <PackagesGrid />
        <MenuTable />
        <ServiceAreas />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
