import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { asset } from "../../lib/asset";
import { autorDe, getArtigos } from "../../lib/blog";

// A parameter rather than a plain rss.xml.ts so that the feed, like the /blog/ index, is
// not emitted while no article is published.
export async function getStaticPaths() {
  const artigos = await getArtigos();
  return artigos.length > 0 ? [{ params: { feed: "rss" } }] : [];
}

export async function GET(context: APIContext) {
  const artigos = await getArtigos();
  return rss({
    title: "Blog do TerraNode",
    description: "Guias práticos, novidades do produto e bastidores de engenharia do TerraNode.",
    site: context.site!,
    trailingSlash: true,
    customData: "<language>pt-br</language>",
    items: artigos.map((a) => ({
      title: a.data.h1,
      description: a.data.description,
      link: asset(`/blog/${a.id}/`),
      pubDate: a.data.publicadoEm,
      author: autorDe(a.data.autor).nome,
      categories: [a.data.categoria],
    })),
  });
}
