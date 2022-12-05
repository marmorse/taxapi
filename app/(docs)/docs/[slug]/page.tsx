import { notFound } from "next/navigation"
import { getTableOfContents } from "@/lib/toc"
import { DashboardTableOfContents } from "@/components/docs/toc"
import { DocsPageHeader } from "@/components/docs/page-header"

async function getData(slug: any) {
  const res = await fetch(
    `${process.env.STRAPI_URL_BASE}/api/docs-articles?populate=%2A&filters[slug][$eq]=` +
      slug,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  return res.json();
}

interface DocPageProps {
  params: {
    slug: string
  }
}


export default async function DocPage({ params }: DocPageProps) {
  const article = await getData(params.slug);
  const articleAttributes = article?.data[0]?.attributes;

  /*
  if (!articleAttributes) {
    notFound()
  } */

  // const toc = await getTableOfContents(doc.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <DocsPageHeader heading={articleAttributes.title} text={articleAttributes.intro} />
 
        <hr className="my-4 border-slate-200 md:my-6" />
        {articleAttributes ? (
          <>
          {articleAttributes.section.length > 0
            ? articleAttributes.section.map((sectionItem: any, index: number) => (
                <div key={"sectionItem" + index}>
                  <h4 className='font-semibold py-4'>{sectionItem?.title}</h4>
                  <p>{sectionItem?.content}</p>
                </div>
              ))
            : null}
          </>
      ) : (
        <div>
          <h3>This document was empty</h3>
          <p> </p>
        </div>
      )}
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
         {/* <DashboardTableOfContents toc={toc} /> */}
        </div>
      </div>
    </main>
  )
}
