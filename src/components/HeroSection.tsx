
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  title: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, ctaText, ctaLink }) => {
  const { t } = useLanguage();
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = document.querySelector(ctaLink);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center w-full overflow-hidden bg-gray-900"
      style={{
        background: `linear-gradient(90deg, rgba(20,20,20,0.7) 0%, rgba(255,119,41,0.5) 100%), url('/lovable-uploads/image (19).jpg') center/cover no-repeat`,
      }}
    >
      {/* Overlay for glassmorphism effect on content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:py-28 w-full max-w-3xl animate-fade-in">
        <img
          src="/lovable-uploads/47873bb0-51cd-4862-a6bd-b47e89255fbe.png"
          alt="Tour Der Wang Logo"
          className="w-40 md:w-56 mb-8 drop-shadow-lg"
        />
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg mb-6 tracking-tighter">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed">
          {t("hero.description")}
        </p>
        <a
          href={ctaLink}
          onClick={handleScroll}
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300 uppercase tracking-wider text-lg"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
