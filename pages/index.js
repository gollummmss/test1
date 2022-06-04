import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { config } from '../dapp.config'

export default function Home() {
  return (
    <div className="min-h-screen h-full w-full flex flex-col bg-brand-background overflow-hidden">
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-full h-full flex flex-col items-center justify-center">
 
      <header className="min-w-full text-gray-800 py-14 px-4 md:px-0 z-1">
        <div className="flex items-center container mx-auto max-w-5xl justify-between h-full">
          {/* Logo */}
          <Link href="#">
            <a className="font-coiny text-xl md:text-3xl font-bold">
              <span className="bg-gradient-to-br from-brand-green to-brand-light pr-2 bg-clip-text text-transparent ">
                Gollum
              </span>
              Town
            </a>
          </Link>

          {/* Opensea Twitter Discord Links */}
          <nav aria-label="Contact Menu">
            <ul className="flex items-center space-x-4 md:space-x-6">
              <li className="cursor-pointer">
                <a href="https://opensea.io" target="_blank" rel="noreferrer">
                  <img src="/images/opensea.png"
                    className="animate-pulse w-12 h-12 md:w-16 md:h-16"
                    viewBox="0 0 90 90"
                    fill="none"
                    
                  >
                    
                  </img>
                </a>
              </li>

              <li className="cursor-pointer">
                <a
                  href="https://twitter.com/Gollumtownwtf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/images/twitter.png"
                    className="animate-pulse w-12 h-12 md:w-16 md:h-16"

                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    
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
            <a className="mt-16 font-coiny uppercase inline-flex items-center px-6 oy-2 text-sm sm:text-2xl md:text-3xl font-medium text-center rounded text-black hover:bg-gray-600 hover:text-white">
              
              CuUM HERE Hooman
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

          <div className="flex flex-col md:flex-row md:space-x-16 space-y-10 items-center mt-20 w-full">
            {/* GollumTown Image */}
            <img
              src="/images/mainpage.png"
              className=" w-80 h-80 rounded-md object-cover"
            />

            <div className="flex flex-col md:items-start items-center justify-center text-center font-coiny text-gray-800 px-4 md:px-0 py-10 mt-14">
              <h2 className="font-bold text-2xl md:text-4xl uppercase">
                Gollums
              </h2>

              <p className="mt-6 text-2xl">
                {`Hooman, have you seen my monkee burgarr and Gary PeeeeeEE Soaurcee?
                Stake me and get sum of BOTH                      
                `}
              </p>
              <p2 className="mt-6 text-3xl">
              
                {`We Gollums the tiny pieces of goblintown
                69% monee to sweep goblins and put in vault
                We Gollums vote how to use da monee          
                `}
              </p2>
              
              
            </div>
          </div>
        </div>
      </div>

    </div>
      
    </div>
    
    
  )
}

