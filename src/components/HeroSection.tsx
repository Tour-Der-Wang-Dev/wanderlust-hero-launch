
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center w-full overflow-hidden bg-gray-900"
      style={{
        // Background image with dark overlay
        background: `linear-gradient(90deg, rgba(20,20,20,0.6) 0%, rgba(255,119,41,0.5) 100%), url('/lovable-uploads/0e9d144d-a703-4198-b652-b08206ee1101.png') center/cover no-repeat`,
      }}
    >
      {/* Overlay for glassmorphism effect on content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-orange-900/20 to-transparent" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:py-28 w-full max-w-2xl animate-fade-in">
        <img
          src="/lovable-uploads/47873bb0-51cd-4862-a6bd-b47e89255fbe.png"
          alt="Tour Der Wang Logo"
          className="w-40 md:w-56 mb-6 drop-shadow-lg animate-scale-in"
          draggable="false"
          style={{ background: "transparent" }}
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-3">
          Discover Wang Sam Mo
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
          Explore the enchanting legends and the breathtaking nature of Wang Sam Mo. Walk with history, marvel at the mighty crocodile, and immerse yourself in beautiful landscapes.
        </p>
        <a
          href="#explore"
          className="inline-block px-7 py-3 rounded-full bg-orange-500 hover:bg-orange-400 transition-colors text-white font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300 uppercase tracking-wider animate-fade-in"
        >
          Explore Wang Sam Mo
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
