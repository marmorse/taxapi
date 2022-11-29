import React from "react";
import Link from "next/link";
import styles from "/styles/Shared.module.css";

export default async function Page({ params }: any) {
  // /blog/hello-world => { params: { slug: 'hello-world' } }
  // /blog/hello-world?id=123 => { searchParams: { id: '123' } }
  return (
    <section>
      Overview Page Click a link to the left to view the documentation.
      {params.slug}
    </section>
  );
}
