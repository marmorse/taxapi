import React from 'react';
import Card from '@/components/card';
import styles from "/styles/Shared.module.css";
import { cache } from 'react'; 

const getSupportCatagories = cache(async function getData() {
  const res = await fetch(`${process.env.STRAPI_URL_BASE}/api/support-categories?populate=%2A`, {
      method: "GET",
      headers: {
      "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`,
      "Content-Type": "application/json"
      }
  });

  return res.json();
})


export default async function SupportCategoryPage({ params, searchParams } : any) {
  // /blog/hello-world => { params: { slug: 'hello-world' } }
  // /blog/hello-world?id=123 => { searchParams: { id: '123' } }

  console.log('Support Page')
  console.log(params.slug); 
 
  var categories : any = []; 
  try {
    categories = await getSupportCatagories(); 
  } catch (error) { 
    // log an error
  }
  let ca : any[] = [];
 
    console.log(ca);
    return <div className='p-4 mt-4 text-white' style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
    {categories?.data?.length > 0 ? (
        categories?.data?.map((article: any, index : number) => (

    <Card key={index}
      title={ article.attributes.title } 
      iconUrl={ article.attributes.icon?.data?.attributes?.url } 
      subText={ article.attributes.subText }
      count={ article.attributes.support_articles?.data?.length}
      slug={ `/support/` + article.attributes.slug} /> 
        ))
        ) : (
        <div>
            <h3>Sorry!!, you do not have articles yet!!</h3>
        </div>  )}
    </div> }