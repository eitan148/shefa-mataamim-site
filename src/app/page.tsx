import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickContactStrip from "@/components/QuickContactStrip";
import About from "@/components/About";
import PackagesGrid from "@/components/PackagesGrid";
import MenuTable from "@/components/MenuTable";
import Gallery from "@/components/Gallery";
import QuickContactBlock from "@/components/QuickContactBlock";
import RelatedContent from "@/components/RelatedContent";
import PostBody from "@/components/PostBody";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import A11yToolbar from "@/components/A11yToolbar";
import { getRecentPostSlugs } from "@/lib/wp";

export const revalidate = 600; // 10 min ISR

export default async function Home() {
  // Try WP REST for real post titles; fall back to the static list inside RelatedContent.
  const posts = await getRecentPostSlugs(60);

  return (
    <>
      <Header />
      <A11yToolbar />

      {/* Top padding for fixed 78px header; bottom padding for 46px sticky bar */}
      <main className="flex-1 pt-[78px] pb-[58px]">
        <Hero />
        <QuickContactStrip />
        <About />
        <PackagesGrid />
        <MenuTable />
        <Gallery />
        <QuickContactBlock />
        <RelatedContent posts={posts.slice(0, 30)} />
        <PostBody />
      </main>

      <Footer />
      <StickyBar />
    </>
  );
}
