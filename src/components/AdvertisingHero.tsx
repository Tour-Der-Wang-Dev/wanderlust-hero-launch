
import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AdvertisingHeroProps {
  heroImage: string;
  summary: string;
  ctaText: string;
  ctaHref: string;
}

const AdvertisingHero: React.FC<AdvertisingHeroProps> = ({
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
    <ScrollArea className="h-screen w-full">
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
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

        {/* Content Sections */}
        <div className="bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 py-16">
            <div id="advertising-content" className="space-y-16">
              {/* Why Advertise Section */}
              <section className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  {language === "th" ? "ทำไมต้องโฆษณากับเรา" : "Why Advertise with Us"}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-lg bg-orange-50 dark:bg-gray-800">
                    <h3 className="text-xl font-semibold mb-3">
                      {language === "th" ? "เข้าถึงกลุ่มเป้าหมาย" : "Reach Your Target Audience"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {language === "th" 
                        ? "เข้าถึงนักท่องเที่ยวที่สนใจการท่องเที่ยวเชิงวัฒนธรรมและธรรมชาติโดยตรง"
                        : "Connect directly with travelers interested in cultural and nature tourism"}
                    </p>
                  </div>
                  <div className="p-6 rounded-lg bg-orange-50 dark:bg-gray-800">
                    <h3 className="text-xl font-semibold mb-3">
                      {language === "th" ? "วิเคราะห์ผลลัพธ์แบบเรียลไทม์" : "Real-time Analytics"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {language === "th"
                        ? "ติดตามผลการโฆษณาของคุณด้วยการวิเคราะห์แบบเรียลไทม์"
                        : "Track your advertising performance with real-time analytics"}
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Form Placeholder */}
              <section id="contact-form" className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  {language === "th" ? "ติดต่อเรา" : "Contact Us"}
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                  {language === "th"
                    ? "สนใจโฆษณากับเรา? ติดต่อเราเพื่อรับข้อมูลเพิ่มเติม"
                    : "Interested in advertising? Contact us for more information"}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default AdvertisingHero;

