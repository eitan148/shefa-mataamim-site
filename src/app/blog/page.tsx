import type { Metadata } from "next";
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
import { listAllPosts, decodeEntities } from "@/lib/content-store";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "בלוג",
  description: 'בלוג קייטרינג שפע מטעמים - מאמרים, רעיונות ותכנון אירועים בכשרות בד"ץ הרב מחפוד.',
  alternates: { canonical: "/blog" },
};

export default async function BlogIndex() {
  const posts = listAllPosts();
  const related = posts.slice(0, 30).map((p) => ({ slug: p.slug, title: decodeEntities(p.title) }));

  // Render the blog index BODY as HTML embedded into the same dynamic-body slot.
  const blogBodyHtml = `
    <p>${posts.length} פוסטים בנושאי קייטרינג, אירועים, תפריטים וכשרות.</p>
    <ul>
      ${posts
        .map((p) => {
          const t = decodeEntities(p.title);
          return `<li><a href="/${p.slug}">${t}</a>${p.date ? ` <span style="color:#777">— ${p.date}</span>` : ""}</li>`;
        })
        .join("")}
    </ul>
  `;

  return (
    <>
      <Header />
      <A11yToolbar />
      <main className="flex-1 pt-[78px] pb-[58px]">
        <Hero pageTitle="בלוג" />
        <QuickContactStrip />
        <About />
        <PackagesGrid />
        <MenuTable />
        <Gallery />
        <QuickContactBlock />
        <RelatedContent posts={related} breadcrumb={{ homeLabel: "דף הבית", current: "בלוג" }} />
        <PostBody title="בלוג" contentHtml={blogBodyHtml} />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
