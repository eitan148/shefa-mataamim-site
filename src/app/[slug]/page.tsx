import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import {
  getPageBySlug,
  listAllPosts,
  getAdjacent,
  decodeEntities,
  type ContentRecord,
} from "@/lib/content-store";

export const revalidate = 600;

const RESERVED = new Set(["api", "_next", "static", "blog", "favicon.ico", "robots.txt", "sitemap.xml"]);

type Params = { slug: string };

function resolve(slug: string): ContentRecord | null {
  if (RESERVED.has(slug)) return null;
  return getPageBySlug(slug);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const rec = resolve(slug);
  if (!rec) return {};
  const title = decodeEntities(rec.title);
  // Strip HTML for description
  const plain = (rec.content || rec.excerpt || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return {
    title,
    description: plain.slice(0, 160),
    alternates: { canonical: rec.route || `/${slug}` },
    openGraph: {
      title,
      description: plain.slice(0, 160),
      images: rec.image_url ? [rec.image_url] : undefined,
    },
  };
}

export default async function CatchAllPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const rec = resolve(slug);
  if (!rec) notFound();

  const title = decodeEntities(rec.title);
  const all = listAllPosts();
  const related = all
    .filter((p) => p.slug !== rec.slug)
    .slice(0, 30)
    .map((p) => ({ slug: p.slug, title: decodeEntities(p.title) }));

  let nav: { prevLabel?: string; prevHref?: string; nextLabel?: string; nextHref?: string } | undefined;
  if (rec.type === "post") {
    const adj = getAdjacent(rec.slug);
    nav = {
      prevLabel: adj.prev ? decodeEntities(adj.prev.title) : undefined,
      prevHref: adj.prev ? `/${adj.prev.slug}` : undefined,
      nextLabel: adj.next ? decodeEntities(adj.next.title) : undefined,
      nextHref: adj.next ? `/${adj.next.slug}` : undefined,
    };
  }

  return (
    <>
      <Header />
      <A11yToolbar />

      <main className="flex-1 pt-[78px] pb-[58px]">
        <Hero pageTitle={title} />
        <QuickContactStrip />
        <About />
        <PackagesGrid />
        <MenuTable />
        <Gallery />
        <QuickContactBlock />
        <RelatedContent
          posts={related}
          breadcrumb={{ homeLabel: "דף הבית", current: title }}
        />
        <PostBody title={title} contentHtml={rec.content || ""} nav={nav} />
      </main>

      <Footer />
      <StickyBar />
    </>
  );
}
