
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Map, Users } from "lucide-react";

interface AboutSectionProps {
  title: string;
  text: string;
  image: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, text, image }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-6 text-lg">{text}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <Map className="text-orange-500" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-sm text-gray-600">Northern Thailand</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <Users className="text-orange-500" />
                  <div>
                    <h3 className="font-semibold">Population</h3>
                    <p className="text-sm text-gray-600">15,000+ residents</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button 
              variant="outline" 
              className="group bg-transparent border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Read More
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>

          <div className="w-full md:w-1/2">
            <img 
              src={image} 
              alt="Wang Sam Mo district" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
