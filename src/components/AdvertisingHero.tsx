
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import AdHero from "./advertising/AdHero";
import WhyAdvertise from "./advertising/WhyAdvertise";
import ContactForm from "./advertising/ContactForm";

interface AdvertisingHeroProps {
  heroImage: string;
  summary: string;
  ctaText: string;
  ctaHref: string;
}

const AdvertisingHero: React.FC<AdvertisingHeroProps> = (props) => {
  return (
    <ScrollArea className="h-screen w-full">
      <div className="flex flex-col min-h-screen">
        <AdHero {...props} />
        
        <div className="bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 py-16">
            <div id="advertising-content" className="space-y-16">
              <WhyAdvertise />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default AdvertisingHero;

