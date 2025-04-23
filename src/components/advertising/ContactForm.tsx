
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  
  return (
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
  );
};

export default ContactForm;

