import logo from '../assets/logo1.jpg'

function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      <section className="flex min-h-[60vh] items-center justify-center py-8 md:py-16">
        <img
          src={logo}
          alt="MBODY Better logo"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto img-rounded object-contain"
        />
      </section>
    </main>
  )
}

export default Home