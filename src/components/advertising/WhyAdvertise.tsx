
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const WhyAdvertise: React.FC = () => {
  const { language } = useLanguage();
  
  return (
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
  );
};

export default WhyAdvertise;

