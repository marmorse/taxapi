import Link from "next/link";
import { cache } from "react"

const getDocsData = cache(async function getData() {
  const res = await fetch(
    `${process.env.STRAPI_URL_BASE}/api/docs-categories?populate=%2A`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  return res.json();
})

interface DocsLayoutProps {
  children: React.ReactNode
}

export default async function DocsLayout({ children }: DocsLayoutProps) {
  const raw = await getDocsData(); 
  const categories = raw?.data;
  return (
    <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
      <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full flex-shrink-0 overflow-y-auto border-r border-r-slate-100 py-6 pr-2 md:sticky md:block lg:py-10">
      {categories?.length > 0 ? (
            categories.map((category: any, index: number) => (
              <span key={"menu" + index}>
                <span>
                  <div className="">
                    <i className="bx bx-home"></i>
                  </div>
                  <span className="mb-1 rounded-md px-2 py-4 text-lg font-semibold">
                    {category.attributes.title}
                  </span>
                </span>

                {category.attributes.docs_articles?.data.length > 0
                  ? category.attributes.docs_articles.data.map(
                      (article: any, index: number) => {
                        return (
                          <Link
                            key={"article" + index}
                            href={"docs/" + article.attributes.slug}
                            className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
                          >
                            {" "}
                            {article.attributes.title}{" "}
                          </Link>
                        );
                      }
                    )
                  : null}
              </span>
            ))
          ) : (
            <div>
              <h3>No articles are available.</h3>
            </div>
          )}

      </aside>
      {children}
    </div>
  )
}
