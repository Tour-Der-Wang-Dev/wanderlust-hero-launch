
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AdHeroProps {
  heroImage: string;
  summary: string;
  ctaText: string;
  ctaHref: string;
}

const AdHero: React.FC<AdHeroProps> = ({
  heroImage,
  summary,
  ctaText,
  ctaHref,
}) => {
  const { language } = useLanguage();

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector(ctaHref);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="relative min-h-[80vh] flex items-center justify-center w-full"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${heroImage}) center/cover no-repeat`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          {language === "th" ? "โฆษณากับเรา" : "Advertise with Us"}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          {summary}
        </p>
        <Button
          onClick={handleScroll}
          className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full transition-all duration-300 animate-fade-in"
        >
          {ctaText}
          <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default AdHero;

