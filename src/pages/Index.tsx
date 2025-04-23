
import React from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import HighlightedPlaces from "@/components/HighlightedPlaces";
import FestivalAndProducts from "@/components/FestivalAndProducts";
import ContactAndFooter from "@/components/ContactAndFooter";

const Index = () => {
  // Navigation sections
  const sections = [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Places", link: "#places" },
    { title: "Festivals", link: "#festivals" },
    { title: "Contact", link: "#contact" },
  ];

  // Sample data for highlighted places
  const locations = [
    {
      title: "The Mighty Crocodile Rock",
      image: "/lovable-uploads/image (19).jpg",
      description: "A natural rock formation resembling a giant crocodile, surrounded by myths and legends dating back centuries.",
    },
    {
      title: "Ancient Temple Ruins",
      image: "/lovable-uploads/image (15).jpg",
      description: "Explore the spiritual heritage of Wang Sam Mo through these well-preserved temple ruins from the 14th century.",
    },
    {
      title: "Wang Sam Mo Waterfall",
      image: "/lovable-uploads/image (19).png",
      description: "A majestic three-tiered waterfall hidden within the lush jungle, offering a refreshing escape from the tropical heat.",
    },
  ];

  // Sample data for events and products
  const events = [
    {
      title: "Songkran Water Festival",
      image: "/lovable-uploads/image (15).jpg",
    },
    {
      title: "Loi Krathong Light Festival",
      image: "/lovable-uploads/image (19).jpg",
    },
    {
      title: "Wang Sam Mo Cultural Fair",
      image: "/lovable-uploads/image (19).png",
    },
    {
      title: "Traditional Dance Performance",
      image: "/lovable-uploads/image (15).jpg",
    },
  ];

  const products = [
    {
      title: "Handwoven Basket",
      image: "/lovable-uploads/image (19).jpg",
      price: 29.99,
    },
    {
      title: "Artisanal Coffee",
      image: "/lovable-uploads/image (15).jpg",
      price: 12.99,
    },
    {
      title: "Thai Silk Scarf",
      image: "/lovable-uploads/image (19).png",
      price: 39.99,
    },
    {
      title: "Carved Wooden Figurine",
      image: "/lovable-uploads/image (15).jpg",
      price: 24.99,
    },
  ];

  // Contact information
  const contactInfo = {
    phone: "+66 123 456 789",
    email: "info@wangsammo-tourism.th"
  };

  const socialMedia = {
    facebook: "https://facebook.com/wangsammotourism",
    instagram: "https://instagram.com/wangsammotourism"
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar sections={sections} />
      <main>
        <HeroSection
          title="Discover Wang Sam Mo"
          ctaText="Explore Now"
          ctaLink="#about"
        />
        <AboutSection
          title="The Hidden Gem of Thailand"
          text="Wang Sam Mo is a district blessed with natural beauty, rich cultural heritage, and warm hospitality. Nestled between mountains and rivers, this charming destination offers visitors an authentic experience of traditional Thai lifestyle while providing modern comforts for travelers."
          image="/lovable-uploads/image (19).jpg"
        />
        <HighlightedPlaces locations={locations} />
        <FestivalAndProducts events={events} products={products} />
        <ContactAndFooter contactInfo={contactInfo} socialMedia={socialMedia} />
      </main>
    </div>
  );
};

export default Index;
