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
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="svg absolute hidden lg:block styles.bgGradient"
                
                >
                <defs>
                    <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                    <stop stop-color="hsl(217, 102%, 99%)" offset="0%"></stop>
                    <stop stop-color="hsl(217,88%, 93%)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path
                    fill="url(#sw-gradient-0)"
                    d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
                ></path>
                </svg>
          <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
              <MainNav items={docsConfig.mainNav}>
               <DocsSidebarNav items={docsConfig.sidebarNav} /> 
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
                <section className="mt-40 ">
                    <div className="hero mt-40">
                            <div className="px-6 py-12 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left">
                            <div className="container mx-auto xl:px-32">
                                <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                                <div className="mt-12 lg:mt-0">
                                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best offer <br /><span className="text-blue-600">for your business</span></h1>
                                    <a className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
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
                        
                    </div>
                </section>
              </div>
            </div>
          </header>
          <div className="container flex-1"></div>
        <SiteFooter />
        </div>
      
  );
}
