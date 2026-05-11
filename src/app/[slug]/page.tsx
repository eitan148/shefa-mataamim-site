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
import { getPostBySlug, getRecentPostSlugs, getAdjacentPosts } from "@/lib/wp";

export const revalidate = 600;

const STATIC_ROUTES = new Set([
  "contact",
  "thank-you",
  "sitemap",
  "terms",
  "accessibility",
  "blog",
  "api",
]);

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  if (STATIC_ROUTES.has(slug)) return {};
  const post = await getPostBySlug(slug);
  if (!post) return {};
  const title = stripHtml(post.title.rendered);
  return {
    title,
    description: post.yoast_head_json?.description || stripHtml(post.excerpt.rendered).slice(0, 160),
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title,
      description: post.yoast_head_json?.description,
      images: post.yoast_head_json?.og_image?.[0]?.url ? [post.yoast_head_json.og_image[0].url] : undefined,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  if (STATIC_ROUTES.has(slug)) notFound();

  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const [related, adjacent] = await Promise.all([
    getRecentPostSlugs(40),
    getAdjacentPosts(slug),
  ]);

  const postTitle = stripHtml(post.title.rendered);

  return (
    <>
      <Header />
      <A11yToolbar />

      <main className="flex-1 pt-[78px] pb-[58px]">
        <Hero pageTitle={postTitle} />
        <QuickContactStrip />
        <About />
        <PackagesGrid />
        <MenuTable />
        <Gallery />
        <QuickContactBlock />
        <RelatedContent
          posts={related.filter((p) => p.slug !== slug).slice(0, 30)}
          breadcrumb={{ homeLabel: "דף הבית", current: postTitle }}
        />
        <PostBody
          title={postTitle}
          contentHtml={post.content.rendered}
          nav={{
            prevLabel: adjacent.prev?.title,
            prevHref: adjacent.prev ? `/${adjacent.prev.slug}` : undefined,
            nextLabel: adjacent.next?.title,
            nextHref: adjacent.next ? `/${adjacent.next.slug}` : undefined,
          }}
        />
      </main>

      <Footer />
      <StickyBar />
    </>
  );
}

function stripHtml(s: string) {
  return s
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}
