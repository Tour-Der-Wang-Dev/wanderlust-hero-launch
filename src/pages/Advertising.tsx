
import React from "react";
import AdvertisingHero from "@/components/AdvertisingHero";
import { useLanguage } from "@/context/LanguageContext";

const Advertising = () => {
  const { t } = useLanguage();
  
  return (
    <AdvertisingHero
      heroImage="/lovable-uploads/image (19).jpg"
      summary={t("advertising.summary") || "Join us in promoting the beauty and culture of Wang Sam Mo to travelers worldwide. Reach engaged audiences and grow your business with our targeted advertising solutions."}
      ctaText={t("advertising.cta") || "Learn More"}
      ctaHref="#advertising-content"
    />
  );
};

export default Advertising;

