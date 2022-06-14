import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { config } from '../dapp.config'

export default function Home() {
  return (
    <div className="min-h-screen h-full w-full flex flex-col bg-brand-light overflow-auto">
      <div className=" w-full flex flex-col">
        <img
          src="/images/BTBG.png"
          className="absolute inset-auto w-full"
        >

        </img>
        </div>
       


      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="min-w-full sticky">
        <div className="flex items-center container mx-auto max-w-5xl justify-between h-full">
       
        

          {/* Opensea Twitter Discord Links */}
          <nav aria-label="Contact Menu"
               className="sticky">
            <ul className="flex items-center space-x-20 ">
              <li className="cursor-pointer">
                <a href="https://opensea.io" target="_blank" rel="noreferrer">
                  <img src="/images/opensea.png"
                       className="w-10 h-10 md:w-12 md:h-12"
                       viewBox="0 0 90 90"
                       >
                  </img>
                  
                </a>
              </li>

              <li className="cursor-pointer">
                <a
                  href="https://twitter.com/Bongtownwtf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/twitter.png"
                    className="w-10 h-10 md:w-12 md:h-12"
                    viewBox="0 0 512 512"

                  >
                    
                  </img>
                </a>
              </li>

              <li className="cursor-pointer">
                <a
                  href="https://discord.gg/rAFdkCwn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/x2y2.png"
                    className="w-10 h-10 md:w-12 md:h-12"
                    viewBox="0 0 448 512"
                  >
                  </img>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="h-full w-full container max-w-5xl mx-auto flex flex-col items-center pt-4">
        <div className="flex flex-col items-center max-w-4xl w-full">
          <Link href="/mint" passHref>
            <a className="mt-16 font-coiny uppercase inline-flex items-center px-6 oy-2 text-sm sm:text-2xl md:text-3xl font-medium text-center rounded text-rose-500 hover:bg-rose-600 hover:text-white">
              Grab a bong
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 ml-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </Link>
          </div>
          </div>
      
          

      </div>

 

      

  )
}
