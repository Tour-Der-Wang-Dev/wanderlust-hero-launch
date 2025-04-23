
import { Language } from "@/context/LanguageContext";

export const formatDate = (date: Date, language: Language): string => {
  try {
    return new Intl.DateTimeFormat(language === "en" ? "en-US" : "th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  } catch (error) {
    console.error("Error formatting date:", error);
    return date.toDateString();
  }
};

export const formatTime = (date: Date, language: Language): string => {
  try {
    return new Intl.DateTimeFormat(language === "en" ? "en-US" : "th-TH", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  } catch (error) {
    console.error("Error formatting time:", error);
    return date.toTimeString().substring(0, 5);
  }
};

export const formatNumber = (number: number, language: Language): string => {
  try {
    return new Intl.NumberFormat(language === "en" ? "en-US" : "th-TH").format(number);
  } catch (error) {
    console.error("Error formatting number:", error);
    return number.toString();
  }
};

export const formatCurrency = (amount: number, language: Language, currency: string = "THB"): string => {
  try {
    return new Intl.NumberFormat(language === "en" ? "en-US" : "th-TH", {
      style: "currency",
      currency: currency,
    }).format(amount);
  } catch (error) {
    console.error("Error formatting currency:", error);
    return `${currency} ${amount}`;
  }
};
