import { useEffect, useState } from "react";
import logo from "../assets/logo1.webp";
import { Link } from "react-router-dom";
function Home() {
  // simple fade-in on mount (no custom CSS needed)
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 50); // slight delay for transition
    return () => clearTimeout(t);
  }, []);

  return (
    // Fill the screen minus the navbar height; keep center on iPhone
    <main className="custom-container pt-10 md:pt-[100px] pb-10 md:pb-[100px]">
      <section className="flex justify-between gap-10 flex-col lg:flex-row items-center">
        <div className="w-full max-w-[520px]">
          <h1 className="text-[26px] sm:text-3xl lg:text-[46px] font-bold font-['Cormorant_Infant'] mb-4">
            Move better. Feel stronger. Live well in your body. Strength
            training and rehabilitation in NYC
          </h1>
          <p className="text-lg font-bold text-black/70 font-['Cormorant_Infant'] mb-8">
            MBODY Better is a holistic wellness space focused on restoring
            balance, improving movement, and helping you reconnect with your
            body through mindful care and expert guidance.
          </p>
          <Link to="/Contact" className="btn">
            CONTACT US
          </Link>
        </div>
        <img
          src={logo}
          alt="home-aside"
          className="w-full max-w-[520px] lg:max-w-[467px] sm:h-[460px] rounded-xl object-cover"
        />
      </section>
    </main>
  );
}

export default Home;
