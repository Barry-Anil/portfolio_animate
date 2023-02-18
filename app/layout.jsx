"use client"
import "../styles/globals.css"
import React, { useState, useEffect } from "react"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"
import Social from "@/components/Social"
import { usePathname } from "next/navigation"
import SplashScreen from "@/components/SplashScreen"

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) {
      return
    }
  }, [isLoading])

  return (
    <html lang="en">
      <head />
      <body className="bg-fill bg-slate-900 bg-fixed bg-no-repeat">
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <Navbar />
            <Social />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  )
}
