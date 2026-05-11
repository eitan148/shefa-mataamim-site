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
import { getHome, listAllPosts, decodeEntities } from "@/lib/content-store";

export const revalidate = 600;

export default async function Home() {
  const home = getHome();
  const allPosts = listAllPosts();
  const related = allPosts.slice(0, 30).map((p) => ({ slug: p.slug, title: decodeEntities(p.title) }));

  // Defensive fallback: if home record missing, render with sensible defaults.
  const pageTitle = home ? decodeEntities(home.title) : 'קייטרינג כשר למהדרין בד"ץ הרב מחפוד';
  const bodyHtml = home?.content || "";

  return (
    <>
      <Header />
      <A11yToolbar />

      <main className="flex-1 pt-[78px] pb-[58px]">
        <Hero pageTitle={pageTitle} />
        <QuickContactStrip />
        <About />
        <PackagesGrid />
        <MenuTable />
        <Gallery />
        <QuickContactBlock />
        <RelatedContent posts={related} />
        <PostBody title={pageTitle} contentHtml={bodyHtml} />
      </main>

      <Footer />
      <StickyBar />
    </>
  );
}
