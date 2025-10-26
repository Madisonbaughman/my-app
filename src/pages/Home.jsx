import { useEffect, useState } from 'react'
import logo from '../assets/logo1.jpg'

function Home() {
  // simple fade-in on mount (no custom CSS needed)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 50) // slight delay for transition
    return () => clearTimeout(t)
  }, [])

  return (
    // Fill the screen minus the navbar height; keep center on iPhone
    <main className="flex items-center justify-center min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-6rem)] px-4">
      <section className="flex flex-col items-center justify-center w-full text-center py-12 md:py-20">
        <img
          src={logo}
          alt="MBODY Better logo"
          className={[
            "w-[85%] sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-lg h-auto rounded-lg object-contain mx-auto",
            "transition-all duration-700 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
          ].join(' ')}
          fetchPriority="high"
        />
      </section>
    </main>
  )
}

export default Home
