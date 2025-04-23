import React, { createContext, useContext, useState } from "react";

export type Language = "en" | "th";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Translation dictionaries
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.places": "Places",
    "nav.festivals": "Festivals",
    "nav.contact": "Contact",
    
    // Hero section
    "hero.title": "Discover Wang Sam Mo",
    "hero.description": "Explore the enchanting legends and breathtaking nature of Wang Sam Mo. Walk with history, marvel at the mighty crocodile, and immerse yourself in beautiful landscapes.",
    "hero.cta": "Explore Now",
    
    // About section
    "about.title": "The Hidden Gem of Thailand",
    "about.text": "Wang Sam Mo is a district blessed with natural beauty, rich cultural heritage, and warm hospitality. Nestled between mountains and rivers, this charming destination offers visitors an authentic experience of traditional Thai lifestyle while providing modern comforts for travelers.",
    "about.location": "Location",
    "about.locationValue": "Northern Thailand",
    "about.population": "Population",
    "about.populationValue": "15,000+ residents",
    "about.readMore": "Read More",
    
    // Places section
    "places.title": "Discover Amazing Places",
    "places.description": "Explore the hidden gems and breathtaking views that make Wang Sam Mo a must-visit destination in Thailand.",
    "places.viewMore": "View more",
    
    // Festivals section
    "festivals.title": "Festivals & Events",
    "festivals.description": "Experience the vibrant culture and traditional celebrations throughout the year in Wang Sam Mo.",
    "products.title": "Local Products",
    "products.description": "Discover authentic Thai crafts and specialties made by local artisans.",
    "products.buyNow": "Buy Now",
    
    // Contact section
    "contact.title": "Contact Us",
    "contact.description": "Have questions about visiting Wang Sam Mo? We're here to help you plan your perfect trip.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.form.yourName": "Your name",
    "contact.form.yourEmail": "Your email",
    "contact.form.yourMessage": "Your message",
    
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.sitemap": "Sitemap"
  },
  th: {
    // Navigation
    "nav.home": "หน้าแรก",
    "nav.about": "เกี่ยวกับ",
    "nav.places": "สถานที่เที่ยว",
    "nav.festivals": "เทศกาล",
    "nav.contact": "ติดต่อ",
    
    // Hero section
    "hero.title": "ค้นพบความงามของวังสามหมอ",
    "hero.description": "สัมผัสตำนานลึกลับและความมหัศจรรย์ของวังสามหมอ เดินทางผ่านประวัติศาสตร์ ตื่นตากับปรากฏการณ์ธรรมชาติ และดื่มด่ำบรรยากาศอันน่าหลงใหล",
    "hero.cta": "เริ่มการผจญภัย",
    
    // About section
    "about.title": "อัญมณีซ่อนเร้นแห่งภาคอีสาน",
    "about.text": "วังสามหมอ คือจุดหมายปลายทางที่ผสมผสานความงามทางธรรมชาติ มรดกทางวัฒนธรรมอันล้ำค่า และไมตรีจิตที่อบอุ่น เป็นดินแดนที่ซ่อนความมหัศจรรย์ไว้ระหว่างขุนเขาและสายน้ำ พร้อมมอบประสบการณ์การท่องเที่ยวที่แท้จริงและความสะดวกสบายสำหรับนักเดินทาง",
    "about.location": "ทำเลที่ตั้ง",
    "about.locationValue": "ภาคอีสานตอนบน",
    "about.population": "ประชากร",
    "about.populationValue": "กว่า 15,000 คน",
    "about.readMore": "อ่านต่อ",
    
    // Places section
    "places.title": "ค้นพบสถานที่น่าค้นหา",
    "places.description": "สำรวจสถานที่ลับและทิวทัศน์อันน่าตื่นตาที่ทำให้วังสามหมอเป็นจุดหมายปลายทางที่ต้องมาเยือนในประเทศไทย",
    "places.viewMore": "ดูเพิ่มเติม",
    
    // Festivals section
    "festivals.title": "เทศกาลและกิจกรรมประจำท้องถิ่น",
    "festivals.description": "สัมผัสชีวิตวัฒนธรรมและประเพณีอันน่าสนใจตลอดทั้งปีที่วังสามหมอ",
    "products.title": "ของดีเมืองวังสามหมอ",
    "products.description": "ค้นพบงานหัตถกรรมไทยแท้และผลิตภัณฑ์พิเศษจากช่างฝีมือท้องถิ่น",
    "products.buyNow": "ซื้อเลย",
    
    // Contact section
    "contact.title": "ติดต่อเรา",
    "contact.description": "มีคำถามเกี่ยวกับการเที่ยวชมวังสามหมอ? เรายินดีช่วยคุณวางแผนการเดินทางที่สมบูรณ์แบบ",
    "contact.form.name": "ชื่อ",
    "contact.form.email": "อีเมล",
    "contact.form.message": "ข้อความ",
    "contact.form.send": "ส่งข้อความ",
    "contact.form.yourName": "ชื่อของคุณ",
    "contact.form.yourEmail": "อีเมลของคุณ",
    "contact.form.yourMessage": "ข้อความของคุณ",
    
    // Footer
    "footer.rights": "สงวนลิขสิทธิ์",
    "footer.privacy": "นโยบายความเป็นส่วนตัว",
    "footer.terms": "เงื่อนไขการใช้งาน",
    "footer.sitemap": "แผนผังเว็บไซต์"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if language is stored in localStorage
    const savedLanguage = typeof window !== "undefined" ? localStorage.getItem("language") : null;
    return (savedLanguage as Language) || "en";
  });

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
