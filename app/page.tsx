import React from "react";
import Link from "next/link";
import styles from "@/styles/Shared.module.css";

import { siteConfig } from "@/config/site"
import { docsConfig } from "@/config/docs"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { DocsSearch } from "@/components/docs/search"
import { SiteFooter } from "@/components/site-footer"
import { DocsSidebarNav } from "@/components/docs/sidebar-nav"

export default async function Page({ params }: any) {
  // /blog/hello-world => { params: { slug: 'hello-world' } }
  // /blog/hello-world?id=123 => { searchParams: { id: '123' } }
  return (
    
        <div className="flex min-h-screen flex-col">
           
          <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
              <MainNav items={docsConfig.mainNav}>
               {/* <DocsSidebarNav items={docsConfig.sidebarNav} /> */}
              </MainNav>
              <div className="flex flex-1 items-center space-x-4 sm:justify-end">
                <div className="flex-1 sm:flex-grow-0">
                  {/* <DocsSearch /> */}
                </div>
                <nav className="flex space-x-4">
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-slate-50 hover:bg-slate-600">
                      <Icons.gitHub className="h-4 w-4 fill-white" />
                      <span className="sr-only">GitHub</span>
                    </div>
                  </Link>
                </nav>
                
              </div>
            </div>
          </header>
          <div className="container flex-1">
         
          <section className="mt-4 z-50">
            
                        <div className="px-6 py-12 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left z-40">
                            <div className="container mx-auto xl:px-32">
                                <div className="grid lg:grid-cols-2 gap-12 flex items-center z-40">
                                <div className="mt-12 lg:mt-0">
                                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 z-40">The best offer <br /><span className="text-blue-600">for your business</span></h1>
                                    <a className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/login" role="button">Get started</a>
                                    <a className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
                                </div>
                                <div className="mb-12 lg:mb-0">
                                    <img
                                    src="https://mdbootstrap.com/img/new/standard/city/017.jpg"
                                    className="w-full rounded-lg shadow-lg"
                                    alt=""
                                    />
                                </div>
                                </div>
                            </div>
                        </div>
                        
       
                </section>
          </div>
        <SiteFooter />
        </div>
      
  );
}
