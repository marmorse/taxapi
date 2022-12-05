import React from "react"
import Accordion from "@/components/accordion"
import Link from "next/link"
import styles from "/styles/Shared.module.css"

async function getData(slug: any) {
  const res = await fetch(
    `${process.env.STRAPI_URL_BASE}/api/support-articles?filters[support_category][slug][$eq]=` +
      slug,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  )

  return res.json()
}

export default async function SupportPage({ params, searchParams }: any) {
  const articles = await getData(params.slug)
  console.log("Support Page")
  console.log(params.slug)
  console.log(searchParams.title)

  var ca: any[] = []
  var cat = articles?.data?.forEach((article: any) => {
    ca.push({
      id: article.id,
      title: article.attributes.title,
      slug: article.attributes.slug,
      content: article.attributes.content,
    })
  })
  console.log("Modified Articles")
  console.log(ca)
  return (
    <div
      className="p-4 mt-4"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    >
      {ca?.length > 0 ? (
        <Accordion items={ca} title={searchParams?.title} />
      ) : (
        <div>Sorry, articles are not available. Please refresh.</div>
      )}
    </div>
  )
}
